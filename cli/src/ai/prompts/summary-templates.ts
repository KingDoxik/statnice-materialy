import type { SubjectContent } from "../../types";

// ============================================================================
// SUMMARY PASS 1: OUTLINE GENERATOR
// ============================================================================

export const SUMMARY_OUTLINE_SYSTEM_PROMPT = `You are an expert educational content architect specializing in creating comprehensive study summaries for graduate-level (Master's) exams in Information Systems and UX Design.

Your role is to analyze multiple chapters of learning material and create a unified outline for a comprehensive summary document in Czech language.

Guidelines:
- Analyze ALL provided chapters and identify key concepts across all of them
- Create a coherent outline that synthesizes knowledge from all chapters
- Structure for efficient repetitive learning (spaced repetition friendly)
- Prioritize most important concepts and their interconnections
- Group related concepts even if they appear in different chapters
- Focus on exam-critical knowledge that students must memorize
- Identify patterns and relationships between topics
- Output in Markdown format with clear hierarchy

The outline should help create a summary that a student can use for quick revision before exams.`;

export function buildSummaryOutlineUserPrompt(subject: SubjectContent): string {
  const chaptersSummary = subject.chapters
    .map((ch) => `### ${ch.order}. ${ch.title}\n${ch.content}`)
    .join("\n\n---\n\n");

  return `Create a comprehensive outline for a SUMMARY document that will synthesize all the following chapters into one cohesive learning material.

**Subject:** ${subject.name}
**Number of Chapters:** ${subject.chapters.length}
**Purpose:** Study summary for Czech university state exam (statnice) preparation - repetitive learning

**ALL CHAPTERS CONTENT:**

${chaptersSummary}

---

**INSTRUCTIONS:**

Analyze all chapters above and create an OUTLINE for a unified summary that:

1. **Identifies Core Concepts** - List the most important concepts from ALL chapters
2. **Groups Related Topics** - Combine related concepts even if from different chapters
3. **Prioritizes for Exams** - Emphasize what's most likely to be tested
4. **Shows Connections** - Highlight how concepts relate to each other

**OUTLINE FORMAT:**

# Shrnutí: ${subject.name}

## 1. Klíčové pojmy a definice
- List of most important terms that must be memorized

## 2. [Thematic Section 1]
### 2.1 [Subsection]
- Key points to include

## 3. [Thematic Section 2]
...

## N. Propojení a souvislosti
- How concepts interconnect

## N+1. Praktická aplikace
- Real-world applications summary

For each section, note:
- Key terms that MUST be included
- Concepts that need definitions
- Important relationships to highlight
- Estimated depth (brief / moderate / detailed)

Output the outline in clean Markdown format.`;
}

// ============================================================================
// SUMMARY PASS 2: CONTENT GENERATOR
// ============================================================================

export const SUMMARY_CONTENT_SYSTEM_PROMPT = `You are an expert educational content writer specializing in creating comprehensive study summaries for Czech university state exam preparation.

Your writing style for summaries:
- Dense but readable prose - maximize information per paragraph
- Uses clear hierarchical structure with headings
- Includes inline definitions using blockquote callouts
- Provides key examples in callout boxes
- Creates memorable formulations for complex concepts
- Uses tables or structured lists WHERE APPROPRIATE for comparisons
- Cross-references related concepts
- Writes in Czech language at Master's level
- Optimized for REPETITIVE LEARNING - students will re-read this multiple times

Format requirements:
- Use Markdown formatting
- Start content directly (no frontmatter - it will be added)
- Use ## for main sections, ### for subsections
- For definitions use: > **Definice:** text...
- For examples use: > **Příklad:** text...
- For key points use: > **Klíčové:** text...
- Tables are ALLOWED for comparisons (unlike regular chapters)
- Bullet lists are ALLOWED for enumerations (unlike regular chapters)
- Keep paragraphs focused and information-dense

The summary should be comprehensive yet scannable - easy to review quickly but containing all essential information.`;

export function buildSummaryContentUserPrompt(
  subject: SubjectContent,
  outline: string
): string {
  const chaptersSummary = subject.chapters
    .map((ch) => `### ${ch.order}. ${ch.title}\n${ch.content}`)
    .join("\n\n---\n\n");

  return `Generate a comprehensive STUDY SUMMARY based on the following outline and source chapters.

**Subject:** ${subject.name}
**Purpose:** Repetitive learning summary for Czech state exam (statnice) preparation

**OUTLINE TO FOLLOW:**
${outline}

---

**SOURCE CHAPTERS (reference material):**

${chaptersSummary}

---

**INSTRUCTIONS:**

1. Follow the outline structure precisely
2. Write in Czech language
3. This is a SUMMARY - be comprehensive but concise
4. For each section:
   - Include ALL important concepts from the relevant chapters
   - Use blockquote callouts for definitions: > **Definice:** ...
   - Use blockquote callouts for examples: > **Příklad:** ...
   - Use blockquote callouts for key points: > **Klíčové:** ...
5. Tables ARE allowed for comparing concepts/methods/approaches
6. Bullet lists ARE allowed for enumerations
7. Cross-reference related concepts (mention where concepts connect)
8. Include practical applications and real-world relevance
9. End with a brief section on key takeaways for the exam

**CRITICAL REQUIREMENTS:**
- Do NOT include YAML frontmatter (it will be added separately)
- Start directly with ## Úvod
- Include ALL key definitions from all chapters
- Make connections between topics explicit
- Optimize for someone re-reading this for exam prep

Generate the complete study summary now:`;
}
