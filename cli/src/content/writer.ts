import { writeFile, copyFile } from "fs/promises";
import matter from "gray-matter";
import type { ContentFile } from "../types";

export async function writeFinalContent(
  sourceFile: ContentFile,
  newContent: string
): Promise<void> {
  // Create backup of original file
  const backupPath = sourceFile.path.replace(".md", ".backup.md");
  await copyFile(sourceFile.path, backupPath);

  // Reconstruct file with original frontmatter
  const frontmatterYaml = [
    "---",
    `title: "${sourceFile.frontmatter.title}"`,
    `subject: "${sourceFile.frontmatter.subject}"`,
    `subjectSlug: "${sourceFile.frontmatter.subjectSlug}"`,
    `order: ${sourceFile.frontmatter.order}`,
    "---",
    "",
  ].join("\n");

  // Clean the new content (remove any duplicate frontmatter if present)
  let cleanContent = newContent;
  if (cleanContent.startsWith("---")) {
    const { content } = matter(cleanContent);
    cleanContent = content;
  }

  // Remove leading title if it duplicates frontmatter title
  const titlePattern = new RegExp(
    `^#\\s*${escapeRegex(sourceFile.frontmatter.title)}\\s*\\n`,
    "i"
  );
  cleanContent = cleanContent.replace(titlePattern, "");

  const finalContent = frontmatterYaml + cleanContent.trim() + "\n";

  await writeFile(sourceFile.path, finalContent, "utf-8");
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
