import { streamText } from "ai";
import { getModel, consumeStreamWithPreview } from "../../client";
import type { SubjectContent, PassResult } from "../../../types";
import { AI_CONFIG } from "../../../config";
import {
  SUMMARY_CONTENT_SYSTEM_PROMPT,
  buildSummaryContentUserPrompt,
} from "../../prompts/summary-templates";

export async function generateSummaryContent(
  subject: SubjectContent,
  outline: string,
  outputPath?: string,
  knowledgeAreas?: string
): Promise<PassResult> {
  const model = getModel();

  // Use larger maxTokens for summary as it synthesizes multiple chapters
  const summaryMaxTokens = Math.min(AI_CONFIG.maxTokens * 2, 32000);

  const result = streamText({
    model,
    system: SUMMARY_CONTENT_SYSTEM_PROMPT,
    prompt: buildSummaryContentUserPrompt(subject, outline, knowledgeAreas),
    temperature: AI_CONFIG.temperature,
    maxTokens: summaryMaxTokens,
  });

  const { text, usage } = await consumeStreamWithPreview(result, outputPath);

  return {
    passNumber: 2,
    passName: "Summary Content Generator",
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
