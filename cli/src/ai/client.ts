import { createOpenAI } from "@ai-sdk/openai";
import type { StreamTextResult } from "ai";
import { writeFile } from "fs/promises";
import { AI_CONFIG } from "../config";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export function getModel() {
  return openai(AI_CONFIG.model);
}

/**
 * Consumes a text stream, logs preview chunks to console, and returns the full text.
 * Shows a rotating snippet of the incoming text for visual feedback.
 * Optionally saves content incrementally to a file as it streams.
 */
export async function consumeStreamWithPreview(
  result: StreamTextResult<Record<string, never>, never>,
  outputPath?: string
): Promise<{ text: string; usage: Awaited<StreamTextResult<Record<string, never>, never>["usage"]> }> {
  let fullText = "";
  const previewLength = 60;
  let chunkCount = 0;

  for await (const chunk of result.textStream) {
    fullText += chunk;
    chunkCount++;

    // Show last N characters as a preview (overwrite the same line)
    const preview = fullText.slice(-previewLength).replace(/\n/g, " ");
    process.stdout.write(`\r  ${preview.padEnd(previewLength)} `);

    // Save to file periodically (every 10 chunks) to avoid too many writes
    if (outputPath && chunkCount % 10 === 0) {
      await writeFile(outputPath, fullText);
    }
  }

  // Final save to ensure all content is written
  if (outputPath) {
    await writeFile(outputPath, fullText);
  }

  // Clear the preview line
  process.stdout.write("\r" + " ".repeat(previewLength + 4) + "\r");

  const usage = await result.usage;
  return { text: fullText, usage };
}
