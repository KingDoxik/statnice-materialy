import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../../client";
import type { SubjectContent, PassResult } from "../../../types";
import { AI_CONFIG } from "../../../config";
import {
  SUMMARY_OUTLINE_SYSTEM_PROMPT,
  buildSummaryOutlineUserPrompt,
} from "../../prompts/summary-templates";

export async function generateSummaryOutline(
  subject: SubjectContent,
  outputPath?: string,
  knowledgeAreas?: string
): Promise<PassResult> {
  const model = getModel();

  const result = streamText({
    model,
    system: SUMMARY_OUTLINE_SYSTEM_PROMPT,
    prompt: buildSummaryOutlineUserPrompt(subject, knowledgeAreas),
    temperature: AI_CONFIG.temperature,
    maxTokens: AI_CONFIG.maxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 1,
    passName: "Summary Outline Generator",
    content: text,
    outputPath: outputPath || "",
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
