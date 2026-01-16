import { defineCollection, z } from 'astro:content';

const subjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    subjectSlug: z.string(),
    order: z.number(),
  }),
});

const questionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    subjectSlug: z.string(),
    order: z.number(),
    question: z.string(),
    relatedChapters: z.array(z.string()).optional(),
  }),
});

export const collections = {
  subjects: subjectsCollection,
  questions: questionsCollection,
};
