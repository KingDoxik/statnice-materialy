import type { SubjectContent } from "../../types";

// ============================================================================
// SUMMARY PASS 1: OUTLINE GENERATOR
// ============================================================================

export const SUMMARY_OUTLINE_SYSTEM_PROMPT = `You are an expert educational content architect specializing in creating essay-like study summaries for graduate-level (Master's) exams in Information Systems and UX Design.

Your role is to analyze multiple chapters of learning material and create a unified outline for a condensed, readable summary document in Czech language.

Guidelines:
- Analyze ALL provided chapters and identify the main themes and insights
- Create an outline that tells a coherent story, not a list of definitions
- Structure for narrative flow - how concepts build on each other
- Focus on connections, practical understanding, and key insights
- Group related ideas thematically, even if from different chapters
- DO NOT create sections for definitions - chapters already contain them
- Aim for a summary that is ~50% shorter than listing everything
- Output in Markdown format with clear hierarchy

The outline should help create an essay-like summary that a student can read through to understand the big picture and connections.`;


export function buildSummaryOutlineUserPrompt(subject: SubjectContent, knowledgeAreas?: string): string {
  const chaptersSummary = subject.chapters
    .map((ch) => `### ${ch.order}. ${ch.title}\n${ch.content}`)
    .join("\n\n---\n\n");

  const knowledgeAreasSection = knowledgeAreas
    ? `\n**OKRUHY ZNALOSTÍ (zaměř se na tyto témata):**\n\n${knowledgeAreas}\n\n---\n`
    : "";

  return `Create an essay-like OUTLINE for a summary document that synthesizes all chapters into one readable, condensed learning material.

**Subject:** ${subject.name}
**Number of Chapters:** ${subject.chapters.length}
**Purpose:** Condensed study summary for Czech state exam - essay format, not definition lists
${knowledgeAreasSection}
**ALL CHAPTERS CONTENT:**

${chaptersSummary}

---

**INSTRUCTIONS:**

Analyze all chapters and create an OUTLINE for a narrative summary that:

1. **Tells a Story** - Organize thematically, show how ideas connect and build on each other
2. **Synthesizes, Don't List** - Combine insights from multiple chapters into unified sections
3. **Skip Definitions** - Chapters already have them; focus on understanding and connections
4. **Be Concise** - Aim for ~50% shorter than a comprehensive listing
5. **Respektuj okruhy znalostí** - If knowledge areas are provided above, structure the outline around them and ensure all topics are covered

**OUTLINE FORMAT:**

# Shrnutí: ${subject.name}

## 1. Úvod (2-3 sentences setting context)

## 2. [Thematic Section - e.g., "Základní principy"]
- Main narrative points (prose, not definitions)
- How this connects to other themes

## 3. [Thematic Section - e.g., "Proces a metody"]
...

## N. [Thematic Section - e.g., "Praktické uplatnění"]

## N+1. Závěr (synthesis, key takeaways)

For each section, note:
- Main ideas to cover in flowing prose
- Connections to highlight
- Keep it condensed - quality over quantity

Output the outline in clean Markdown format.`;

}

// ============================================================================
// SUMMARY PASS 2: CONTENT GENERATOR
// ============================================================================

export const SUMMARY_CONTENT_SYSTEM_PROMPT = `You are an expert educational content writer specializing in creating essay-like study summaries for Czech university state exam preparation.

Your writing style for summaries:
- Clear, flowing prose - like explaining to a smart colleague
- Continuous sentences that connect ideas naturally
- Use bullet points ONLY for: lists of items, steps, or comparisons (not for every point)
- NO definition callouts - chapters already contain detailed definitions
- Focus on understanding, connections, and practical insights
- Cross-references chapters for detailed definitions when helpful
- Writes in Czech language at Master's level
- Condensed - aim for ~50% shorter than a comprehensive treatment

Format requirements:
- Use Markdown formatting
- Start content directly (no frontmatter - it will be added)
- Use ## for main sections, ### for subsections
- Write in flowing paragraphs, not lists of definitions
- Bullet points only where truly appropriate (enumerations, comparisons)
- Tables are allowed for comparisons when they add clarity
- Bold key terms inline but don't define them extensively

The summary should read like a well-written essay - easy to follow, insightful, and condensed.`;


export function buildSummaryContentUserPrompt(
  subject: SubjectContent,
  outline: string,
  knowledgeAreas?: string
): string {
  const chaptersSummary = subject.chapters
    .map((ch) => `### ${ch.order}. ${ch.title}\n${ch.content}`)
    .join("\n\n---\n\n");

  const knowledgeAreasSection = knowledgeAreas
    ? `\n**OKRUHY ZNALOSTÍ (zaměř se na tyto témata):**\n\n${knowledgeAreas}\n\n---\n`
    : "";

  return `Generate an essay-like STUDY SUMMARY based on the following outline and source chapters.

**Subject:** ${subject.name}
**Purpose:** Condensed, readable summary for Czech state exam preparation
${knowledgeAreasSection}
**OUTLINE TO FOLLOW:**
${outline}

---

**SOURCE CHAPTERS (reference material):**

${chaptersSummary}

---

**INSTRUCTIONS:**

1. Follow the outline structure
2. Write in Czech language
3. Write in **flowing prose** - continuous sentences, not definition lists
4. For each section:
   - Explain ideas as if talking to a colleague
   - Connect concepts naturally in paragraphs
   - Use bullet points ONLY for actual lists/enumerations
   - DO NOT include definition callouts (> **Definice:** etc.)
5. Tables only when comparing options/approaches side-by-side
6. Reference chapters for detailed definitions (e.g., "viz kapitola 2")
7. Make connections between topics explicit
8. Be concise - aim for ~50% shorter than listing everything
9. If knowledge areas are provided, ensure they are all addressed in the summary

**CRITICAL REQUIREMENTS:**
- Do NOT include YAML frontmatter (it will be added separately)
- Start directly with ## Úvod
- NO definition callouts - write naturally, bold key terms inline
- Focus on insight and understanding, not memorization
- Keep it condensed and readable

Generate the essay-like study summary now:`;
}
