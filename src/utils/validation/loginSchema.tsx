import { z } from 'zod';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email obrigatória' })
    .email('Email inválido'),
  password: z
    .string({ required_error: 'Password obrigatório' })
    .min(5, 'Password inválida'),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export default loginSchema;
