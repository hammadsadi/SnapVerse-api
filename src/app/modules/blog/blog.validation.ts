import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Please Provide Your Blog Title' }),
    content: z.string({ required_error: 'Please Provide Your Blog Content' }),
    author: z.string(),
  }),
});

export const BlogValidationSchemas = { createBlogValidationSchema };
