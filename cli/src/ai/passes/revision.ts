import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../client";
import type { ContentFile, PassResult } from "../../types";
import { AI_CONFIG } from "../../config";
import {
  REVISION_SYSTEM_PROMPT,
  buildRevisionUserPrompt,
} from "../prompts/templates";

export async function generateRevision(
  file: ContentFile,
  content: string,
  review: string,
  outputPath?: string
): Promise<PassResult> {
  const model = getModel();

  const result = streamText({
    model,
    system: REVISION_SYSTEM_PROMPT,
    prompt: buildRevisionUserPrompt(file, content, review),
    temperature: AI_CONFIG.temperature,
    maxTokens: AI_CONFIG.maxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 4,
    passName: "Revision Engine",
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
