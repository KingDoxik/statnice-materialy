import { generateText } from "ai";
import { getModel } from "../../client";
import type { SubjectContent, GeneratedQuestion, PassResult } from "../../../types";
import { AI_CONFIG } from "../../../config";

const QUESTION_GENERATION_SYSTEM_PROMPT = `Jsi generátor zkušebních otázek pro české vysokoškolské ústní státní zkoušky.

Tvým úkolem je vytvořit sadu otevřených otázek vhodných pro ústní zkoušku na základě:
1. Oficiálních požadavků (co musí student znát)
2. Studijních materiálů (obsah kapitol)

Požadavky na otázky:
- Otázky by měly být dostatečně široké pro 5-10 minutovou diskuzi
- Pokrývej všechna klíčová témata z požadavků
- Otázky by měly testovat porozumění, ne zapamatování
- Zahrň jak konceptuální, tak aplikační otázky
- Odpovědi by měly být komplexní, ale strukturované
- Piš v češtině

Formát výstupu: Vrať POUZE validní JSON pole otázek bez jakéhokoliv dalšího textu. Každá otázka má strukturu:
{
  "title": "Krátký název otázky (max 60 znaků)",
  "question": "Plné znění otázky",
  "answer": "Podrobná odpověď v markdown formátu",
  "relatedChapters": ["nazev-kapitoly-1", "nazev-kapitoly-2"]
}

Vygeneruj 10-15 otázek, které komplexně pokryjí celý předmět.`;

function buildQuestionGenerationPrompt(
  subject: SubjectContent,
  requirements: string
): string {
  const chaptersContent = subject.chapters
    .map((ch) => `## ${ch.order}. ${ch.title}\n\n${ch.content}`)
    .join("\n\n---\n\n");

  return `# Předmět: ${subject.name}

## Oficiální požadavky (okruhy znalostí)

${requirements}

## Studijní materiály

${chaptersContent}

---

Vygeneruj zkušební otázky pro tento předmět. Vrať POUZE JSON pole bez dalšího textu.`;
}

export async function generateQuestions(
  subject: SubjectContent,
  requirements: string,
  outputPath?: string
): Promise<{ questions: GeneratedQuestion[]; passResult: PassResult }> {
  const model = getModel();

  const result = await generateText({
    model,
    system: QUESTION_GENERATION_SYSTEM_PROMPT,
    prompt: buildQuestionGenerationPrompt(subject, requirements),
    temperature: AI_CONFIG.temperature,
    maxTokens: AI_CONFIG.maxTokens,
  });

  // Parse JSON from response
  let questions: GeneratedQuestion[] = [];
  try {
    // Try to extract JSON array from the response
    const text = result.text.trim();
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      questions = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error("No JSON array found in response");
    }
  } catch (parseError) {
    throw new Error(
      `Failed to parse AI response as JSON: ${parseError instanceof Error ? parseError.message : String(parseError)}\n\nRaw response:\n${result.text.slice(0, 500)}...`
    );
  }

  // Validate question structure
  questions = questions.map((q, index) => ({
    title: q.title || `Otázka ${index + 1}`,
    question: q.question || "",
    answer: q.answer || "",
    relatedChapters: Array.isArray(q.relatedChapters) ? q.relatedChapters : [],
  }));

  const passResult: PassResult = {
    passNumber: 1,
    passName: "Question Generator",
    content: JSON.stringify(questions, null, 2),
    outputPath: outputPath || "",
    timestamp: new Date(),
    tokenUsage: result.usage
      ? {
          promptTokens: result.usage.promptTokens,
          completionTokens: result.usage.completionTokens,
          totalTokens: result.usage.totalTokens,
        }
      : undefined,
  };

  return { questions, passResult };
}
