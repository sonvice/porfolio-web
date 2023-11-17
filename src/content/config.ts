import { z, defineCollection } from 'astro:content';




const postCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: image(),
        date: z.date(),
        description: z.string().max(200),
    })
})

export const collections = {
    'posts': postCollection,
  };