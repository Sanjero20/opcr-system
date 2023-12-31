import * as z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Must be a valid email address' }),
  password: z.string().min(1, { message: 'This field is required' }),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

export const accountFormSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: 'Username must be at least 2 characters' }),
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email('Must be a valid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    permission: z.string(),
    superior: z.string(),
  })
  .refine(
    (data) => {
      if (data.permission === 'individual' && !data.superior) return false;
      return true;
    },
    { message: 'Individual must have a superior.', path: ['superior'] },
  );

export type AccountFormType = z.infer<typeof accountFormSchema>;
