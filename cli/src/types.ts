export interface Frontmatter {
  title: string;
  subject: string;
  subjectSlug: string;
  order: number;
}

export interface ContentFile {
  path: string;
  relativePath: string;
  filename: string;
  frontmatter: Frontmatter;
  content: string;
  subjectDir: string;
}

export interface SubjectGroup {
  slug: string;
  name: string;
  files: ContentFile[];
}

export interface PassResult {
  passNumber: 1 | 2 | 3 | 4;
  passName: string;
  content: string;
  outputPath: string;
  timestamp: Date;
  tokenUsage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface GenerationSession {
  sessionId: string;
  sourceFile: ContentFile;
  tempDir: string;
  passes: PassResult[];
  startedAt: Date;
  completedAt?: Date;
  status: "pending" | "in_progress" | "completed" | "failed";
  error?: string;
}

export interface AIConfig {
  provider: "openai";
  model: string;
  temperature: number;
  maxTokens: number;
}

// Summary generation types
export interface ChapterContent {
  order: number;
  title: string;
  content: string;
  filePath: string;
}

export interface SubjectContent {
  slug: string;
  name: string;
  subjectDir: string;
  chapters: ChapterContent[];
  totalCharCount: number;
}

export interface SummarySession {
  sessionId: string;
  subject: SubjectContent;
  tempDir: string;
  passes: PassResult[];
  startedAt: Date;
  completedAt?: Date;
  status: "pending" | "in_progress" | "completed" | "failed";
  error?: string;
}

// Question generation types
export interface GeneratedQuestion {
  title: string;
  question: string;
  answer: string;
  relatedChapters: string[];
}

export interface QuestionGenerationInput {
  subjectSlug: string;
  subjectName: string;
  requirements: string;
  chapters: ChapterContent[];
}

export interface QuestionSession {
  sessionId: string;
  subject: SubjectContent;
  requirements: string;
  tempDir: string;
  passes: PassResult[];
  questions: GeneratedQuestion[];
  startedAt: Date;
  completedAt?: Date;
  status: "pending" | "in_progress" | "completed" | "failed";
  error?: string;
}
