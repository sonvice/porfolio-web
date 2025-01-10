import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: ({image}) => z.object({
        title: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        cover: image(),
        date: z.date(),
        description: z.string().max(200),
    })
})

export const collections = {
    'posts': postCollection,
  };