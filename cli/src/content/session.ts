import { readdir, readFile, stat } from "fs/promises";
import { join, basename } from "path";
import matter from "gray-matter";
import { TEMP_ROOT, CONTENT_ROOT } from "../config";
import type { ContentFile, Frontmatter } from "../types";

export interface IncompleteSession {
  sessionId: string;
  sessionDir: string;
  sourceFilePath: string;
  sourceFileName: string;
  topicTitle: string;
  completedPasses: number[];
  nextPass: 1 | 2 | 3 | 4;
  outlineContent?: string;
  contentContent?: string;
  reviewContent?: string;
  createdAt: Date;
}

const PASS_FILES = {
  1: "01-outline.md",
  2: "02-content.md",
  3: "03-review.md",
  4: "04-final.md",
} as const;

export async function scanIncompleteSessions(): Promise<IncompleteSession[]> {
  const sessions: IncompleteSession[] = [];

  try {
    const entries = await readdir(TEMP_ROOT, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name === ".gitkeep") continue;

      const sessionDir = join(TEMP_ROOT, entry.name);
      const session = await analyzeSession(entry.name, sessionDir);

      if (session && session.nextPass <= 4) {
        sessions.push(session);
      }
    }
  } catch {
    // Temp directory might not exist or be empty
  }

  // Sort by creation date, newest first
  return sessions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

async function analyzeSession(
  sessionId: string,
  sessionDir: string
): Promise<IncompleteSession | null> {
  // Parse session ID: {timestamp}-{filename}
  const [timestampStr, ...filenameParts] = sessionId.split("-");
  const timestamp = parseInt(timestampStr, 10);
  const filename = filenameParts.join("-") + ".md";

  if (isNaN(timestamp)) return null;

  // Check which passes have completed
  const completedPasses: number[] = [];
  let outlineContent: string | undefined;
  let contentContent: string | undefined;
  let reviewContent: string | undefined;

  for (const [passNum, passFile] of Object.entries(PASS_FILES)) {
    const passPath = join(sessionDir, passFile);
    try {
      const fileStat = await stat(passPath);
      if (fileStat.isFile() && fileStat.size > 0) {
        completedPasses.push(parseInt(passNum, 10));

        // Read content for completed passes
        const content = await readFile(passPath, "utf-8");
        if (passNum === "1") outlineContent = content;
        if (passNum === "2") contentContent = content;
        if (passNum === "3") reviewContent = content;
      }
    } catch {
      // File doesn't exist
    }
  }

  // If all 4 passes complete, session is done
  if (completedPasses.length === 4) return null;

  // Find the source file
  const sourceFilePath = await findSourceFile(filename);
  if (!sourceFilePath) return null;

  // Get topic title from source file
  const sourceContent = await readFile(sourceFilePath, "utf-8");
  const { data } = matter(sourceContent);
  const topicTitle = (data as Frontmatter).title || filename;

  const nextPass = (Math.max(0, ...completedPasses) + 1) as 1 | 2 | 3 | 4;

  return {
    sessionId,
    sessionDir,
    sourceFilePath,
    sourceFileName: filename,
    topicTitle,
    completedPasses,
    nextPass,
    outlineContent,
    contentContent,
    reviewContent,
    createdAt: new Date(timestamp),
  };
}

async function findSourceFile(filename: string): Promise<string | null> {
  try {
    const subjectDirs = await readdir(CONTENT_ROOT, { withFileTypes: true });

    for (const dir of subjectDirs) {
      if (!dir.isDirectory()) continue;

      const filePath = join(CONTENT_ROOT, dir.name, filename);
      try {
        await stat(filePath);
        return filePath;
      } catch {
        // File not in this directory
      }
    }
  } catch {
    // Content root doesn't exist
  }

  return null;
}

export async function getSourceFileFromSession(
  session: IncompleteSession
): Promise<ContentFile | null> {
  try {
    const rawContent = await readFile(session.sourceFilePath, "utf-8");
    const { data, content } = matter(rawContent);
    const frontmatter = data as Frontmatter;

    // Extract subject directory from path
    const pathParts = session.sourceFilePath.split("/");
    const subjectDir = pathParts[pathParts.length - 2];

    return {
      path: session.sourceFilePath,
      relativePath: `${subjectDir}/${session.sourceFileName}`,
      filename: session.sourceFileName,
      frontmatter,
      content: content.trim(),
      subjectDir,
    };
  } catch {
    return null;
  }
}
