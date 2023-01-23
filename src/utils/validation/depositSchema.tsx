import { z } from 'zod';

export const addMoneySchema = z.object({
  amount: z
    .string({ required_error: 'Campo obrigatório' })
    .regex(/\d+([.,]\d{1,2})?/g, 'Formato inválido'),
  currency: z.enum(['USD', 'AOA']),
});

export type AddMoneyFormType = z.infer<typeof addMoneySchema>;
