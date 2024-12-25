import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleWares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/auth/register',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
);

export const UserRoutes = router;
