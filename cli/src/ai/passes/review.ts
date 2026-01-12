import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../client";
import type { ContentFile, PassResult } from "../../types";
import { AI_CONFIG } from "../../config";
import {
  REVIEW_SYSTEM_PROMPT,
  buildReviewUserPrompt,
} from "../prompts/templates";

export async function generateReview(
  file: ContentFile,
  content: string,
  outputPath?: string
): Promise<PassResult> {
  const model = getModel();

  const result = streamText({
    model,
    system: REVIEW_SYSTEM_PROMPT,
    prompt: buildReviewUserPrompt(file, content),
    temperature: 0.5, // Lower temperature for more consistent review
    maxTokens: AI_CONFIG.maxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 3,
    passName: "Mentor/Reviewer",
    content: text,
    outputPath: "",
    timestamp: new Date(),
    tokenUsage: usage
      ? {
          promptTokens: usage.promptTokens,
          completionTokens: usage.completionTokens,
          totalTokens: usage.totalTokens,
        }
      : undefined,
  };
}
