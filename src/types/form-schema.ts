import * as z from 'zod';

export const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email('Must be a valid email address'),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 8 characters' }),
  permission: z.string(),
  superior: z.string(),
});
