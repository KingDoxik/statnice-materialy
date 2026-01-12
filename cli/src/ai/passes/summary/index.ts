import * as p from "@clack/prompts";
import pc from "picocolors";
import { mkdir } from "fs/promises";
import { join } from "path";
import type { SubjectContent, SummarySession } from "../../../types";
import { TEMP_ROOT, MAX_RETRIES } from "../../../config";
import { generateSummaryOutline } from "./outline";
import { generateSummaryContent } from "./content";
import { writeSummaryContent } from "../../../content/summary-writer";

function isTimeoutError(error: unknown): boolean {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    return (
      error.name === "TimeoutError" ||
      error.name === "AbortError" ||
      message.includes("timeout") ||
      message.includes("aborted") ||
      message.includes("timed out")
    );
  }
  return false;
}

function getErrorDetails(error: unknown): string {
  if (error instanceof Error) {
    const details: string[] = [error.message];
    if (error.cause) {
      details.push(`Cause: ${String(error.cause)}`);
    }
    const apiError = error as { status?: number; code?: string };
    if (apiError.status) {
      details.push(`Status: ${apiError.status}`);
    }
    if (apiError.code) {
      details.push(`Code: ${apiError.code}`);
    }
    return details.join(" | ");
  }
  return String(error);
}

async function withRetry<T>(
  fn: () => Promise<T>,
  passName: string,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      const startTime = Date.now();
      p.log.info(pc.dim(`${passName} attempt ${attempt}/${maxRetries + 1} started...`));

      const result = await fn();

      const elapsed = Math.round((Date.now() - startTime) / 1000);
      p.log.info(pc.dim(`${passName} completed in ${elapsed}s`));

      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      const isTimeout = isTimeoutError(error);
      const errorDetails = getErrorDetails(error);

      if (attempt <= maxRetries) {
        if (isTimeout) {
          p.log.warn(
            `${passName} timed out (attempt ${attempt}/${maxRetries + 1})`
          );
          p.log.info(`The API is taking too long. Retrying in 10 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 10000));
        } else {
          p.log.warn(
            `${passName} failed (attempt ${attempt}/${maxRetries + 1}): ${errorDetails}`
          );
          p.log.info(`Retrying in 5 seconds...`);
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } else {
        p.log.error(`${passName} failed after ${maxRetries + 1} attempts`);
        p.log.error(`Last error: ${errorDetails}`);
      }
    }
  }

  throw lastError;
}

export async function runSummaryPipeline(
  subject: SubjectContent,
  knowledgeAreas?: string
): Promise<SummarySession> {
  const sessionId = `summary-${Date.now()}-${subject.slug}`;
  const tempDir = join(TEMP_ROOT, sessionId);

  await mkdir(tempDir, { recursive: true });

  const session: SummarySession = {
    sessionId,
    subject,
    tempDir,
    passes: [],
    startedAt: new Date(),
    status: "in_progress",
  };

  const spinner = p.spinner();

  try {
    // Pass 1: Summary Outline Generation
    spinner.start("Pass 1/2: Generating summary outline...");
    const outlinePath = join(tempDir, "01-summary-outline.md");
    const outlineResult = await withRetry(
      () => generateSummaryOutline(subject, outlinePath, knowledgeAreas),
      "Summary Outline"
    );
    session.passes.push(outlineResult);
    spinner.stop(pc.green("Pass 1/2: Summary outline generated"));

    // Pass 2: Summary Content Generation
    spinner.start("Pass 2/2: Generating summary content...");
    const contentPath = join(tempDir, "02-summary-content.md");
    const contentResult = await withRetry(
      () => generateSummaryContent(subject, outlineResult.content, contentPath, knowledgeAreas),
      "Summary Content"
    );
    session.passes.push(contentResult);
    spinner.stop(pc.green("Pass 2/2: Summary content generated"));

    // Write final output
    const outputPath = await writeSummaryContent(subject, contentResult.content);

    session.status = "completed";
    session.completedAt = new Date();

    // Calculate total tokens
    const totalTokens = session.passes.reduce(
      (sum, pass) => sum + (pass.tokenUsage?.totalTokens ?? 0),
      0
    );

    p.note(
      `Session: ${session.sessionId}\nTemp files: ${tempDir}\nOutput: ${outputPath}\nTotal tokens: ${totalTokens.toLocaleString()}`,
      "Summary Generation Complete"
    );

    return session;
  } catch (error) {
    session.status = "failed";
    session.error = error instanceof Error ? error.message : String(error);
    spinner.stop(pc.red("Summary generation failed"));

    p.log.error(`Session saved at: ${tempDir}`);
    throw error;
  }
}
