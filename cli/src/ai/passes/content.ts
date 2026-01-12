import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../client";
import type { ContentFile, PassResult } from "../../types";
import { AI_CONFIG } from "../../config";
import {
  CONTENT_SYSTEM_PROMPT,
  buildContentUserPrompt,
} from "../prompts/templates";

export async function generateContent(
  file: ContentFile,
  outline: string,
  outputPath?: string
): Promise<PassResult> {
  const model = getModel();

  const result = streamText({
    model,
    system: CONTENT_SYSTEM_PROMPT,
    prompt: buildContentUserPrompt(file, outline),
    temperature: AI_CONFIG.temperature,
    maxTokens: AI_CONFIG.maxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 2,
    passName: "Content Generator",
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
