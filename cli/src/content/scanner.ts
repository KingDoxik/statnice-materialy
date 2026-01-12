import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import type { ContentFile, SubjectGroup, Frontmatter } from "../types";
import { CONTENT_ROOT } from "../config";

export async function scanContentFiles(): Promise<ContentFile[]> {
  const files: ContentFile[] = [];

  // Get all subject directories
  const subjectDirs = await readdir(CONTENT_ROOT, { withFileTypes: true });

  for (const dir of subjectDirs) {
    if (!dir.isDirectory()) continue;

    const subjectPath = join(CONTENT_ROOT, dir.name);
    const mdFiles = await readdir(subjectPath);

    for (const filename of mdFiles) {
      if (!filename.endsWith(".md")) continue;

      const filePath = join(subjectPath, filename);
      const rawContent = await readFile(filePath, "utf-8");
      const { data, content } = matter(rawContent);

      files.push({
        path: filePath,
        relativePath: `${dir.name}/${filename}`,
        filename,
        frontmatter: data as Frontmatter,
        content: content.trim(),
        subjectDir: dir.name,
      });
    }
  }

  // Sort by subject directory, then by order
  return files.sort((a, b) => {
    if (a.subjectDir !== b.subjectDir) {
      return a.subjectDir.localeCompare(b.subjectDir);
    }
    return a.frontmatter.order - b.frontmatter.order;
  });
}

export function groupBySubject(files: ContentFile[]): SubjectGroup[] {
  const groups = new Map<string, SubjectGroup>();

  for (const file of files) {
    const slug = file.frontmatter.subjectSlug;
    if (!groups.has(slug)) {
      groups.set(slug, {
        slug,
        name: file.frontmatter.subject,
        files: [],
      });
    }
    groups.get(slug)!.files.push(file);
  }

  // Sort groups by slug (numeric prefix ensures correct order)
  return Array.from(groups.values()).sort((a, b) =>
    a.slug.localeCompare(b.slug)
  );
}
