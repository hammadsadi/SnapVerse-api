import { Router } from 'express';

import validateRequest from '../../middlewares/validation';
import { BlogValidationSchemas } from './blog.validation';
import { BlogControllers } from './blog.controllers';

// Init Blog Router
const router = Router();

// Create Blog
router.post(
  '/',
  validateRequest(BlogValidationSchemas.createBlogValidationSchema),
  BlogControllers.blogCreate,
);

export const BlogRoutes = router;
