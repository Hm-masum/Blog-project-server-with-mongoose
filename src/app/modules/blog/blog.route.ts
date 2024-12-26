import express from 'express';
import validateRequest from '../../middleWares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import auth from '../../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.createBlogValidationSchema),
  blogController.createBlog,
);

router.get('/', blogController.getAllBlogs);

router.delete('/:id', auth(USER_ROLE.user), blogController.deleteBlog);

router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidation.updateBlogValidationSchema),
  blogController.updateBlog,
);

export const BlogRoutes = router;
