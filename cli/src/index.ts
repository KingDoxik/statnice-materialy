#!/usr/bin/env bun

import * as p from "@clack/prompts";
import pc from "picocolors";
import { scanContentFiles, groupBySubject } from "./content/scanner";
import {
  scanIncompleteSessions,
  getSourceFileFromSession,
} from "./content/session";
import {
  selectMainAction,
  confirmGeneration,
  confirmResume,
  confirmSummaryGeneration,
} from "./cli/prompts";
import {
  runGenerationPipeline,
  resumeGenerationPipeline,
} from "./ai/passes";
import { runSummaryPipeline } from "./ai/passes/summary";
import { runWithConcurrency } from "./utils/parallel";
import { PARALLEL_CONFIG } from "./config";

async function main() {
  console.clear();

  // Verify environment
  if (!process.env.OPENAI_API_KEY) {
    p.cancel(
      "No API key found. Set OPENAI_API_KEY in your .env file or environment."
    );
    process.exit(1);
  }

  try {
    // Scan content files and incomplete sessions in parallel
    const spinner = p.spinner();
    spinner.start("Scanning content files and sessions...");

    const [files, incompleteSessions] = await Promise.all([
      scanContentFiles(),
      scanIncompleteSessions(),
    ]);

    const groups = groupBySubject(files);
    spinner.stop(
      `Found ${files.length} files in ${groups.length} subjects` +
        (incompleteSessions.length > 0
          ? `, ${incompleteSessions.length} incomplete session(s)`
          : "")
    );

    // Main action selection (new or resume)
    const action = await selectMainAction(groups, incompleteSessions);

    if (action.type === "resume") {
      // Resume flow
      const session = action.session;
      const confirmed = await confirmResume(session);

      if (!confirmed) {
        p.cancel("Resume cancelled.");
        process.exit(0);
      }

      const sourceFile = await getSourceFileFromSession(session);
      if (!sourceFile) {
        p.cancel(`Could not find source file: ${session.sourceFilePath}`);
        process.exit(1);
      }

      p.log.info(`\nResuming: ${pc.cyan(session.topicTitle)}`);

      try {
        await resumeGenerationPipeline(sourceFile, session);
        p.outro(pc.green("Generation completed successfully!"));
      } catch (error) {
        p.log.error(
          `Error: ${error instanceof Error ? error.message : String(error)}`
        );
        p.outro(pc.yellow("You can resume this session by running the tool again."));
        process.exit(1);
      }
    } else if (action.type === "summary") {
      // Summary generation flow
      const subject = action.subject;

      const confirmed = await confirmSummaryGeneration(subject);
      if (!confirmed) {
        p.cancel("Summary generation cancelled.");
        process.exit(0);
      }

      p.log.info(`\nGenerating summary for: ${pc.cyan(subject.name)}`);
      p.log.info(
        `Synthesizing ${subject.chapters.length} chapters (${(subject.totalCharCount / 1000).toFixed(1)}k chars)`
      );

      try {
        await runSummaryPipeline(subject);
        p.outro(pc.green("Summary generation completed successfully!"));
      } catch (error) {
        p.log.error(
          `Error: ${error instanceof Error ? error.message : String(error)}`
        );
        p.outro(pc.yellow("Summary generation failed. Check temp files for partial results."));
        process.exit(1);
      }
    } else {
      // New generation flow
      const selectedFiles = action.files;

      const confirmed = await confirmGeneration(selectedFiles);
      if (!confirmed) {
        p.cancel("Generation cancelled.");
        process.exit(0);
      }

      // Run generation pipeline for selected files
      const useParallel = PARALLEL_CONFIG.enabled && selectedFiles.length > 1;

      const results: Array<{
        file: (typeof selectedFiles)[0];
        success: boolean;
        error?: unknown;
      }> = [];

      if (useParallel) {
        // Parallel execution
        p.log.info(
          `\nProcessing ${pc.cyan(String(selectedFiles.length))} files in parallel ` +
            `(max ${PARALLEL_CONFIG.maxConcurrent} concurrent)`
        );

        const tasks = selectedFiles.map((file) => ({
          name: file.frontmatter.title,
          fn: () => runGenerationPipeline(file),
        }));

        const { results: settledResults } = await runWithConcurrency(
          tasks,
          PARALLEL_CONFIG.maxConcurrent,
          {
            onProgress: (completed, total, current) => {
              p.log.step(`[${completed}/${total}] Starting: ${pc.cyan(current)}`);
            },
          }
        );

        // Process results
        settledResults.forEach((result, index) => {
          const file = selectedFiles[index];
          if (result.status === "fulfilled") {
            results.push({ file, success: true });
          } else {
            p.log.error(`Failed: ${file.frontmatter.title}`);
            p.log.error(
              `Error: ${result.reason instanceof Error ? result.reason.message : String(result.reason)}`
            );
            results.push({ file, success: false, error: result.reason });
          }
        });
      } else {
        // Sequential execution (single file or parallel disabled)
        for (const file of selectedFiles) {
          p.log.info(`\nProcessing: ${pc.cyan(file.frontmatter.title)}`);

          try {
            await runGenerationPipeline(file);
            results.push({ file, success: true });
          } catch (error) {
            p.log.error(`Failed: ${file.frontmatter.title}`);
            p.log.error(
              `Error: ${error instanceof Error ? error.message : String(error)}`
            );
            results.push({ file, success: false, error });

            if (selectedFiles.length > 1) {
              const shouldContinue = await p.confirm({
                message: "Continue with remaining files?",
              });

              if (!shouldContinue || p.isCancel(shouldContinue)) {
                break;
              }
            }
          }
        }
      }

      // Summary
      const successful = results.filter((r) => r.success).length;
      const failed = results.filter((r) => !r.success).length;

      if (failed > 0) {
        p.outro(
          `Generation complete: ${pc.green(`${successful} successful`)}, ${pc.red(`${failed} failed`)}\n` +
            pc.yellow("Run again to resume failed sessions.")
        );
      } else {
        p.outro(
          pc.green(`Generation complete: ${successful} file(s) processed successfully!`)
        );
      }
    }
  } catch (error) {
    p.cancel(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

main();
