import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blerg = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blerg' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    uploadDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
  }),
});

export const collections = {
  blerg 
};