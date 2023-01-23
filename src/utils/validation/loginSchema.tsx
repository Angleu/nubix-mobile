import { z } from 'zod';

const loginSchema = z.object({
  email: z.string({ required_error: 'Campo Obrigatório' }),
  password: z
    .string({ required_error: 'Password obrigatória' })
    .min(8, 'Password inválida'),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export default loginSchema;
