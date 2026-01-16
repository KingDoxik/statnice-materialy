import * as p from "@clack/prompts";
import pc from "picocolors";
import type { ContentFile, SubjectGroup, SubjectContent, ChapterContent } from "../types";
import type { IncompleteSession } from "../content/session";

export type MainAction =
  | { type: "new"; files: ContentFile[] }
  | { type: "resume"; session: IncompleteSession }
  | { type: "summary"; subject: SubjectContent }
  | { type: "questions"; subject: SubjectContent; requirements: string };

export async function selectMainAction(
  groups: SubjectGroup[],
  incompleteSessions: IncompleteSession[]
): Promise<MainAction> {
  p.intro(pc.bgCyan(pc.black(" Statnice Content Generator ")));

  // Build options list
  const options: Array<{ value: string; label: string; hint?: string }> = [];

  if (incompleteSessions.length > 0) {
    options.push({
      value: "resume",
      label: `Resume incomplete session (${incompleteSessions.length} available)`,
      hint: "Continue from where you left off",
    });
  }

  options.push(
    { value: "new", label: "Generate content for chapters" },
    { value: "summary", label: "Generate subject summaries", hint: "Create 00-shrnuti.md" },
    { value: "questions", label: "Generate exam questions", hint: "Create mock exam Q&A" }
  );

  const action = await p.select({
    message: "What would you like to do?",
    options,
  });

  if (p.isCancel(action)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  if (action === "resume") {
    const session = await selectSessionToResume(incompleteSessions);
    return { type: "resume", session };
  }

  if (action === "summary") {
    const subject = await selectSubjectForSummary(groups);
    return { type: "summary", subject };
  }

  if (action === "questions") {
    const { subject, requirements } = await selectSubjectForQuestions(groups);
    return { type: "questions", subject, requirements };
  }

  // New generation flow
  const files = await selectFiles(groups);
  return { type: "new", files };
}

async function selectSubjectForSummary(
  groups: SubjectGroup[]
): Promise<SubjectContent> {
  // Filter to subjects that have content (chapters with actual content)
  const subjectsWithContent = groups.filter((g) =>
    g.files.some((f) => f.content.trim().length > 100)
  );

  if (subjectsWithContent.length === 0) {
    p.log.warn("No subjects with generated content found. Generate chapter content first.");
    process.exit(0);
  }

  const selectedSubject = await p.select({
    message: "Select a subject to generate summary for:",
    options: subjectsWithContent.map((g) => {
      const filesWithContent = g.files.filter((f) => f.content.trim().length > 100);
      const hasSummary = g.files.some((f) => f.filename === "00-shrnuti.md");
      return {
        value: g.slug,
        label: `${g.name} (${filesWithContent.length}/${g.files.length} chapters)`,
        hint: hasSummary ? "summary exists" : undefined,
      };
    }),
  });

  if (p.isCancel(selectedSubject)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  // Get aggregated content
  const subject = groups.find((g) => g.slug === selectedSubject)!;
  return aggregateSubjectContent(subject);
}

function aggregateSubjectContent(group: SubjectGroup): SubjectContent {
  const chapters: ChapterContent[] = group.files
    .filter((f) => f.filename !== "00-shrnuti.md") // Exclude existing summary
    .filter((f) => f.content.trim().length > 100) // Only files with content
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    .map((f) => ({
      order: f.frontmatter.order,
      title: f.frontmatter.title,
      content: f.content,
      filePath: f.path,
    }));

  return {
    slug: group.slug,
    name: group.name,
    subjectDir: group.files[0]?.path.replace(/\/[^/]+$/, "") || "",
    chapters,
    totalCharCount: chapters.reduce((sum, ch) => sum + ch.content.length, 0),
  };
}

async function selectSubjectForQuestions(
  groups: SubjectGroup[]
): Promise<{ subject: SubjectContent; requirements: string }> {
  // Filter to subjects that have content (chapters with actual content)
  const subjectsWithContent = groups.filter((g) =>
    g.files.some((f) => f.content.trim().length > 100)
  );

  if (subjectsWithContent.length === 0) {
    p.log.warn("No subjects with generated content found. Generate chapter content first.");
    process.exit(0);
  }

  const selectedSubject = await p.select({
    message: "Select a subject to generate questions for:",
    options: subjectsWithContent.map((g) => {
      const filesWithContent = g.files.filter((f) => f.content.trim().length > 100);
      return {
        value: g.slug,
        label: `${g.name} (${filesWithContent.length}/${g.files.length} chapters)`,
      };
    }),
  });

  if (p.isCancel(selectedSubject)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  // Get aggregated content
  const subject = groups.find((g) => g.slug === selectedSubject)!;
  const subjectContent = aggregateSubjectContent(subject);

  // Ask for requirements input
  p.log.info(pc.dim("\nPaste the official requirements (okruhy znalostí)."));
  p.log.info(pc.dim("Press Enter twice when done.\n"));

  const requirementsInput = await p.text({
    message: "Official requirements:",
    placeholder: "Student musí znát základní principy...",
    validate: (value) => {
      if (!value || value.trim().length < 20) {
        return "Please provide the official requirements (at least 20 characters).";
      }
    },
  });

  if (p.isCancel(requirementsInput)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return { subject: subjectContent, requirements: requirementsInput };
}

export async function confirmQuestionGeneration(
  subject: SubjectContent,
  requirements: string
): Promise<boolean> {
  const chapterList = subject.chapters
    .map((ch) => `  ${ch.order}. ${ch.title}`)
    .join("\n");

  const requirementsPreview = requirements.length > 200
    ? requirements.slice(0, 200) + "..."
    : requirements;

  p.note(
    `Subject: ${subject.name}\nChapters to use:\n${chapterList}\n\nTotal content: ${(subject.totalCharCount / 1000).toFixed(1)}k characters\n\nRequirements preview:\n${requirementsPreview}\n\nModel: gpt-5.2`,
    "Question Generation"
  );

  const confirm = await p.confirm({
    message: `Generate exam questions for ${subject.chapters.length} chapters?`,
  });

  if (p.isCancel(confirm)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return confirm;
}

export async function confirmSummaryGeneration(
  subject: SubjectContent
): Promise<boolean> {
  const chapterList = subject.chapters
    .map((ch) => `  ${ch.order}. ${ch.title}`)
    .join("\n");

  p.note(
    `Subject: ${subject.name}\nChapters to summarize:\n${chapterList}\n\nTotal content: ${(subject.totalCharCount / 1000).toFixed(1)}k characters\nOutput: 00-shrnuti.md\nModel: gpt-5.2`,
    "Summary Generation"
  );

  const confirm = await p.confirm({
    message: `Generate summary for ${subject.chapters.length} chapters?`,
  });

  if (p.isCancel(confirm)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return confirm;
}

async function selectSessionToResume(
  sessions: IncompleteSession[]
): Promise<IncompleteSession> {
  const passNames = ["Outline", "Content", "Review", "Revision"];

  const selectedSession = await p.select({
    message: "Select a session to resume:",
    options: sessions.map((s) => ({
      value: s.sessionId,
      label: s.topicTitle,
      hint: `Resume from Pass ${s.nextPass} (${passNames[s.nextPass - 1]})`,
    })),
  });

  if (p.isCancel(selectedSession)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return sessions.find((s) => s.sessionId === selectedSession)!;
}

async function selectFiles(groups: SubjectGroup[]): Promise<ContentFile[]> {
  // Step 1: Select how to choose files
  const selectionMode = await p.select({
    message: "How would you like to select files?",
    options: [
      { value: "single", label: "Single file" },
      { value: "subject", label: "All files in a subject" },
      { value: "all", label: "All files (batch mode)" },
      { value: "empty", label: "Only files without content" },
    ],
  });

  if (p.isCancel(selectionMode)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  if (selectionMode === "all") {
    return groups.flatMap((g) => g.files);
  }

  if (selectionMode === "empty") {
    const emptyFiles = groups
      .flatMap((g) => g.files)
      .filter((f) => f.content.trim().length < 100);

    if (emptyFiles.length === 0) {
      p.log.warn("No empty files found.");
      process.exit(0);
    }

    p.log.info(`Found ${emptyFiles.length} files without content.`);
    return emptyFiles;
  }

  // Step 2: Select subject
  const selectedSubject = await p.select({
    message: "Select a subject:",
    options: groups.map((g) => ({
      value: g.slug,
      label: `${g.name} (${g.files.length} files)`,
    })),
  });

  if (p.isCancel(selectedSubject)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  const subject = groups.find((g) => g.slug === selectedSubject)!;

  if (selectionMode === "subject") {
    return subject.files;
  }

  // Step 3: Select single file within subject
  const selectedFile = await p.select({
    message: "Select a file to generate:",
    options: subject.files.map((f) => ({
      value: f.path,
      label: `${f.frontmatter.order}. ${f.frontmatter.title}`,
      hint: f.content.length < 100 ? "empty" : `${f.content.length} chars`,
    })),
  });

  if (p.isCancel(selectedFile)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return [subject.files.find((f) => f.path === selectedFile)!];
}

export async function confirmGeneration(files: ContentFile[]): Promise<boolean> {
  const fileList = files.map((f) => `  - ${f.frontmatter.title}`).join("\n");

  p.note(
    `Files to process:\n${fileList}\n\nModel: gpt-5.2 (hardcoded)`,
    "Generation Summary"
  );

  const confirm = await p.confirm({
    message: `Generate content for ${files.length} file(s)?`,
  });

  if (p.isCancel(confirm)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return confirm;
}

export async function confirmResume(session: IncompleteSession): Promise<boolean> {
  const passNames = ["Outline", "Content", "Review", "Revision"];

  p.note(
    `Topic: ${session.topicTitle}\nSession ID: ${session.sessionId}\nCompleted passes: ${session.completedPasses.map((n) => passNames[n - 1]).join(", ") || "None"}\nNext pass: ${session.nextPass} (${passNames[session.nextPass - 1]})\n\nModel: gpt-5.2 (hardcoded)`,
    "Resume Summary"
  );

  const confirm = await p.confirm({
    message: `Resume generation from Pass ${session.nextPass}?`,
  });

  if (p.isCancel(confirm)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  return confirm;
}
