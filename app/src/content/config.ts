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

export const collections = {
  subjects: subjectsCollection,
};
