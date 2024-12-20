import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    password: z.string({ required_error: 'Password is required' }).max(30),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Must be a valid email address' }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
