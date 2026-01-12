import type { ContentFile } from "../../types";

// ============================================================================
// PASS 1: OUTLINE GENERATOR (Wikipedia-style)
// ============================================================================

export const OUTLINE_SYSTEM_PROMPT = `You are an expert educational content architect specializing in creating comprehensive study materials for graduate-level (Master's) exams.

Your role is to create Wikipedia-style outlines that will guide the generation of high-quality learning materials in Czech language.

Guidelines:
- Create outlines suitable for Czech university state exam preparation
- Structure content like a Wikipedia article: lead section, logical flow, natural subsections
- Include practical context and real-world applications
- Consider progressive complexity from basics to advanced concepts
- Identify key terms that need definitions (to be included inline)
- Output in Markdown format with clear hierarchy

The outline should be comprehensive enough for a student to understand the scope and structure of the topic.`;

export function buildOutlineUserPrompt(file: ContentFile): string {
  return `Create a Wikipedia-style outline for a learning material on the following topic:

**Topic Title:** ${file.frontmatter.title}
**Subject Area:** ${file.frontmatter.subject}
**Context:** This is material for Czech university state exam (statnice) preparation at Master's level.

${file.content.length > 100 ? `**Existing Content (to expand upon):**\n${file.content}\n` : "**Note:** This topic has no existing content and needs to be created from scratch."}

Please create a hierarchical outline organized like a Wikipedia article:

# ${file.frontmatter.title}

## Lead (Úvod)
- Brief description of what this section will contain

## Background / Context (Kontext)
- What background will be covered

## Core Concepts (Hlavní pojmy)
### Concept A
- Key points for this concept
### Concept B
- Key points for this concept

## Applications (Aplikace)
- How this topic applies in practice

## Challenges and Considerations (Výzvy a omezení)
- What challenges or limitations will be discussed

## See Also (Související témata)
- List of related topics from the curriculum

For each section, include:
- Brief description of what will be covered
- Key terms that will be defined inline
- Estimated depth (brief paragraph / moderate coverage / detailed explanation)

Output the outline in clean Markdown format.`;
}

// ============================================================================
// PASS 2: CONTENT GENERATOR (Essay-style)
// ============================================================================

export const CONTENT_SYSTEM_PROMPT = `You are an expert educational content writer. You write in Czech language with academic precision while maintaining accessibility.

Your writing style:
- Essay-like continuous prose with flowing paragraphs
- NO bullet point lists - everything must be written as prose paragraphs
- Uses headings (##, ###) to structure content logically
- Explains complex concepts through clear narrative
- Provides definitions inline using blockquote callouts
- Includes examples using blockquote callouts
- Maintains consistent terminology throughout
- Writes at graduate/Master's level for Czech university state exams
- Natural transitions between sections and paragraphs

Format requirements:
- Use Markdown formatting
- Start content directly after frontmatter (no duplicate title header)
- Use ## for main sections, ### for subsections
- For definitions use: > **Definice:** text...
- For examples use: > **Příklad:** text...
- NO bullet lists or numbered lists in the main content
- Write everything as flowing essay prose`;

export function buildContentUserPrompt(file: ContentFile, outline: string): string {
  return `Generate comprehensive learning material based on the following outline.

**Topic:** ${file.frontmatter.title}
**Subject:** ${file.frontmatter.subject}

**OUTLINE TO FOLLOW:**
${outline}

**INSTRUCTIONS:**
1. Follow the outline structure precisely
2. Write in Czech language
3. Write in ESSAY STYLE - continuous prose paragraphs, NO bullet lists
4. Start with a lead section (Úvod) explaining what this topic covers and why it matters
5. For each section in the outline:
   - Write thorough explanations as flowing prose
   - Use blockquote callouts for definitions: > **Definice:** ...
   - Use blockquote callouts for examples: > **Příklad:** ...
   - Connect paragraphs with natural transitions
6. Include practical applications and real-world relevance
7. End with a summary paragraph (Závěr) of key takeaways

**CRITICAL FORMAT RULES:**
- Do NOT use bullet points or numbered lists
- Do NOT include YAML frontmatter (it will be added separately)
- Start directly with ## Úvod (Introduction section)
- Write everything as continuous prose
- Only use callout boxes (>) for definitions and examples

Generate the complete learning material now:`;
}

// ============================================================================
// PASS 3: MENTOR/REVIEWER
// ============================================================================

export const REVIEW_SYSTEM_PROMPT = `You are a senior academic expert and mentor reviewing educational materials for Czech university state exam (statnice) preparation.

Your review approach:
- Evaluate factual accuracy and completeness
- Check pedagogical effectiveness
- Assess structure and logical flow
- Verify essay-style writing (NO bullet lists allowed)
- Identify gaps in coverage
- Verify appropriate depth for Master's level
- Check terminology consistency
- Evaluate practical relevance
- Suggest improvements with specific, actionable feedback

You provide constructive, detailed feedback organized by priority.`;

export function buildReviewUserPrompt(file: ContentFile, content: string): string {
  return `Review the following learning material for quality and completeness.

**Topic:** ${file.frontmatter.title}
**Subject:** ${file.frontmatter.subject}
**Target Audience:** Czech university students preparing for Master's state exams

**CONTENT TO REVIEW:**
${content}

**REVIEW CRITERIA:**

Please evaluate and provide feedback on:

1. **Factual Accuracy** (0-10)
   - Are all facts correct?
   - Are there any misleading statements?

2. **Completeness** (0-10)
   - Does it cover all essential aspects of the topic?
   - Are there gaps that would hurt exam preparation?
   - Is the depth appropriate?

3. **Essay Style Compliance** (0-10)
   - Is the content written as continuous prose?
   - Are there any bullet lists that should be converted to prose?
   - Do paragraphs flow naturally?

4. **Structure & Organization** (0-10)
   - Is the logical flow clear?
   - Are sections well-organized?
   - Are transitions smooth?

5. **Pedagogical Quality** (0-10)
   - Are explanations clear?
   - Are examples (in callout boxes) effective?
   - Is it appropriate for the target level?

6. **Language & Style** (0-10)
   - Is the Czech language correct and professional?
   - Is terminology consistent?

**OUTPUT FORMAT:**

## Overall Assessment
[Brief summary and overall score out of 60]

## Strengths
[What works well]

## Required Improvements (High Priority)
[Critical issues that must be fixed - especially any bullet lists that need to be converted to prose]

## Recommended Improvements (Medium Priority)
[Improvements that would significantly enhance quality]

## Optional Enhancements (Low Priority)
[Nice-to-have additions]

## Specific Corrections
[List any factual errors or specific text that needs changing]`;
}

// ============================================================================
// PASS 4: REVISION ENGINE
// ============================================================================

export const REVISION_SYSTEM_PROMPT = `You are an expert content editor specializing in refining educational materials. Your task is to incorporate review feedback and produce a polished, final version of the learning material.

Your approach:
- Address all high and medium priority feedback
- Convert any bullet lists to flowing prose paragraphs
- Preserve the original voice and structure where it works well
- Make surgical edits rather than wholesale rewrites
- Ensure consistency throughout
- Verify all corrections are properly integrated
- Maintain Markdown formatting
- Output clean, publication-ready content
- Ensure essay-style writing throughout (no bullet lists)`;

export function buildRevisionUserPrompt(
  file: ContentFile,
  content: string,
  review: string
): string {
  return `Revise the following learning material based on the expert review feedback.

**Topic:** ${file.frontmatter.title}
**Subject:** ${file.frontmatter.subject}

**ORIGINAL CONTENT:**
${content}

---

**REVIEW FEEDBACK:**
${review}

---

**REVISION INSTRUCTIONS:**

1. Address ALL items marked as "High Priority" and "Required Improvements"
2. Address MOST items marked as "Medium Priority" and "Recommended Improvements"
3. Consider "Low Priority" and "Optional Enhancements" where feasible
4. Apply all "Specific Corrections" exactly as suggested
5. CRITICAL: Convert any remaining bullet lists to flowing prose paragraphs
6. Maintain the overall structure unless structural changes were recommended
7. Ensure smooth transitions and consistent tone
8. Verify factual accuracy of any corrections made
9. Keep the content in Czech language
10. Preserve proper Markdown formatting

**OUTPUT:**
- Provide ONLY the revised content
- Do NOT include the frontmatter (it will be added separately)
- Do NOT include meta-commentary about what was changed
- Start directly with ## Úvod
- Ensure NO bullet lists remain - everything must be prose

Generate the final, revised learning material:`;
}
