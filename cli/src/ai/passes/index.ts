import * as p from "@clack/prompts";
import pc from "picocolors";
import { mkdir, readFile } from "fs/promises";
import { join } from "path";
import type { ContentFile, GenerationSession } from "../../types";
import { TEMP_ROOT, MAX_RETRIES } from "../../config";
import type { IncompleteSession } from "../../content/session";
import { generateOutline } from "./outline";
import { generateContent } from "./content";
import { generateReview } from "./review";
import { generateRevision } from "./revision";
import { writeFinalContent } from "../../content/writer";

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
    // Check for API error details
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

export async function runGenerationPipeline(
  file: ContentFile
): Promise<GenerationSession> {
  const sessionId = `${Date.now()}-${file.filename.replace(".md", "")}`;
  const tempDir = join(TEMP_ROOT, sessionId);

  await mkdir(tempDir, { recursive: true });

  const session: GenerationSession = {
    sessionId,
    sourceFile: file,
    tempDir,
    passes: [],
    startedAt: new Date(),
    status: "in_progress",
  };

  return runPipeline(session, file, 1);
}

export async function resumeGenerationPipeline(
  file: ContentFile,
  incompleteSession: IncompleteSession
): Promise<GenerationSession> {
  const session: GenerationSession = {
    sessionId: incompleteSession.sessionId,
    sourceFile: file,
    tempDir: incompleteSession.sessionDir,
    passes: [],
    startedAt: incompleteSession.createdAt,
    status: "in_progress",
  };

  p.log.info(
    `Resuming session ${incompleteSession.sessionId} from Pass ${incompleteSession.nextPass}`
  );

  return runPipeline(
    session,
    file,
    incompleteSession.nextPass,
    incompleteSession.outlineContent,
    incompleteSession.contentContent,
    incompleteSession.reviewContent
  );
}

async function runPipeline(
  session: GenerationSession,
  file: ContentFile,
  startPass: 1 | 2 | 3 | 4,
  existingOutline?: string,
  existingContent?: string,
  existingReview?: string
): Promise<GenerationSession> {
  const spinner = p.spinner();

  let outlineContent = existingOutline;
  let contentContent = existingContent;
  let reviewContent = existingReview;

  try {
    // Pass 1: Outline Generation
    if (startPass <= 1) {
      spinner.start("Pass 1/4: Generating Wikipedia-style outline...");
      const outlinePath = join(session.tempDir, "01-outline.md");
      const outlineResult = await withRetry(
        () => generateOutline(file, outlinePath),
        "Pass 1"
      );
      session.passes.push(outlineResult);
      outlineContent = outlineResult.content;
      spinner.stop(pc.green("Pass 1/4: Outline generated"));
    } else {
      p.log.info(pc.dim("Pass 1/4: Using existing outline"));
    }

    if (!outlineContent) {
      // Try to read from file if not provided
      outlineContent = await readFile(
        join(session.tempDir, "01-outline.md"),
        "utf-8"
      );
    }

    // Pass 2: Content Generation
    if (startPass <= 2) {
      spinner.start("Pass 2/4: Generating essay-style content...");
      const contentPath = join(session.tempDir, "02-content.md");
      const contentResult = await withRetry(
        () => generateContent(file, outlineContent!, contentPath),
        "Pass 2"
      );
      session.passes.push(contentResult);
      contentContent = contentResult.content;
      spinner.stop(pc.green("Pass 2/4: Content generated"));
    } else {
      p.log.info(pc.dim("Pass 2/4: Using existing content"));
    }

    if (!contentContent) {
      contentContent = await readFile(
        join(session.tempDir, "02-content.md"),
        "utf-8"
      );
    }

    // Pass 3: Expert Review
    if (startPass <= 3) {
      spinner.start("Pass 3/4: Expert review in progress...");
      const reviewPath = join(session.tempDir, "03-review.md");
      const reviewResult = await withRetry(
        () => generateReview(file, contentContent!, reviewPath),
        "Pass 3"
      );
      session.passes.push(reviewResult);
      reviewContent = reviewResult.content;
      spinner.stop(pc.green("Pass 3/4: Review completed"));
    } else {
      p.log.info(pc.dim("Pass 3/4: Using existing review"));
    }

    if (!reviewContent) {
      reviewContent = await readFile(
        join(session.tempDir, "03-review.md"),
        "utf-8"
      );
    }

    // Pass 4: Revision
    if (startPass <= 4) {
      spinner.start("Pass 4/4: Applying revisions...");
      const finalPath = join(session.tempDir, "04-final.md");
      const revisionResult = await withRetry(
        () => generateRevision(file, contentContent!, reviewContent!, finalPath),
        "Pass 4"
      );
      session.passes.push(revisionResult);
      spinner.stop(pc.green("Pass 4/4: Revisions applied"));

      // Write final output with preserved frontmatter
      await writeFinalContent(file, revisionResult.content);
    }

    session.status = "completed";
    session.completedAt = new Date();

    // Calculate total tokens used
    const totalTokens = session.passes.reduce(
      (sum, pass) => sum + (pass.tokenUsage?.totalTokens ?? 0),
      0
    );

    p.note(
      `Session: ${session.sessionId}\nTemp files: ${session.tempDir}\nOriginal updated: ${file.path}\nTotal tokens: ${totalTokens.toLocaleString()}`,
      "Generation Complete"
    );

    return session;
  } catch (error) {
    session.status = "failed";
    session.error = error instanceof Error ? error.message : String(error);
    spinner.stop(pc.red("Generation failed"));

    p.log.error(`Session saved at: ${session.tempDir}`);
    p.log.info(`You can resume this session by running the tool again.`);

    throw error;
  }
}
