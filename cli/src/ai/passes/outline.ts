import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../client";
import type { ContentFile, PassResult } from "../../types";
import { AI_CONFIG } from "../../config";
import {
  OUTLINE_SYSTEM_PROMPT,
  buildOutlineUserPrompt,
} from "../prompts/templates";

export async function generateOutline(
  file: ContentFile,
  outputPath?: string
): Promise<PassResult> {
  const model = getModel();

  const result = streamText({
    model,
    system: OUTLINE_SYSTEM_PROMPT,
    prompt: buildOutlineUserPrompt(file),
    temperature: AI_CONFIG.temperature,
    maxTokens: AI_CONFIG.maxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 1,
    passName: "Outline Generator",
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
