import { writeFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import type { SubjectContent } from "../types";
import { CONTENT_ROOT } from "../config";

export async function writeSummaryContent(
  subject: SubjectContent,
  newContent: string
): Promise<string> {
  const outputPath = join(CONTENT_ROOT, subject.slug, "00-shrnuti.md");

  // Build frontmatter for summary
  const frontmatterYaml = [
    "---",
    `title: "Shrnutí"`,
    `subject: "${subject.name}"`,
    `subjectSlug: "${subject.slug}"`,
    `order: 0`,
    "---",
    "",
  ].join("\n");

  // Clean the new content (remove any duplicate frontmatter if present)
  let cleanContent = newContent;
  if (cleanContent.startsWith("---")) {
    const { content } = matter(cleanContent);
    cleanContent = content;
  }

  // Remove leading title if it starts with "# Shrnutí"
  cleanContent = cleanContent.replace(/^#\s*Shrnutí[^\n]*\n/, "");

  const finalContent = frontmatterYaml + cleanContent.trim() + "\n";

  await writeFile(outputPath, finalContent, "utf-8");

  return outputPath;
}
