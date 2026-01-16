import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import type { SubjectContent, GeneratedQuestion } from "../types";
import { QUESTIONS_ROOT } from "../config";

export async function writeQuestionFiles(
  subject: SubjectContent,
  questions: GeneratedQuestion[]
): Promise<string> {
  const outputDir = join(QUESTIONS_ROOT, subject.slug);

  // Ensure the output directory exists
  await mkdir(outputDir, { recursive: true });

  // Write each question as a separate markdown file
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const order = i + 1;
    const paddedOrder = String(order).padStart(2, "0");
    const filename = `${paddedOrder}-question.md`;
    const outputPath = join(outputDir, filename);

    const frontmatter = [
      "---",
      `title: "${escapeYamlString(question.title)}"`,
      `subject: "${escapeYamlString(subject.name)}"`,
      `subjectSlug: "${subject.slug}"`,
      `order: ${order}`,
      `question: "${escapeYamlString(question.question)}"`,
      question.relatedChapters.length > 0
        ? `relatedChapters: [${question.relatedChapters.map((c) => `"${c}"`).join(", ")}]`
        : null,
      "---",
      "",
    ]
      .filter(Boolean)
      .join("\n");

    // Clean the answer content
    let answerContent = question.answer.trim();

    // Add a header if the answer doesn't start with one
    if (!answerContent.startsWith("#")) {
      answerContent = `# Očekávaná odpověď\n\n${answerContent}`;
    }

    const fileContent = frontmatter + answerContent + "\n";

    await writeFile(outputPath, fileContent, "utf-8");
  }

  return outputDir;
}

function escapeYamlString(str: string): string {
  // Escape special characters in YAML strings
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}
