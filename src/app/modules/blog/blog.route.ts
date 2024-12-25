import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(blogValidation.createBlogValidationSchema),
  blogController.createBlog,
);

router.get('/', blogController.getAllBlogs);

router.delete('/:id', blogController.deleteBlog);

router.patch(
  '/:id',
  validateRequest(blogValidation.updateBlogValidationSchema),
  blogController.updateBlog,
);

export const BlogRoutes = router;
