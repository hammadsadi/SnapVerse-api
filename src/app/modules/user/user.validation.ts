import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'User Name is Required' }),
    email: z
      .string({ required_error: 'User Email Is Required!' })
      .email({ message: 'Invalid Email Format!' }),
    password: z
      .string({ required_error: 'Password Is Required!' })
      .min(5)
      .max(30),
  }),
});

export const UserValidationSchemas = {
  createUserValidationSchema,
};
