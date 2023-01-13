import { z } from 'zod';

const signUpSchema = z.object({
  stepOne: z.object({
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .email('Deve ser um email válido'),
    phoneNumber: z
      .string({ required_error: 'Campo obrigatório' })
      .regex(/^9\d{8}$/g, 'Deve ser um Nº de telefone válido'),
    password: z
      .string({ required_error: 'Campo obrigatório' })
      .min(8, 'Deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string({ required_error: 'Campo obrigatório' })
      .min(8, 'Deve ter no mínimo 8 caracteres'),
  }),
  personalInfo: z.object({
    profilePicture: z.string().optional(),
    firstName: z.string({ required_error: 'Campo obrigatório' }),
    lastName: z.string({ required_error: 'Campo obrigatório' }),
    nif: z
      .string({ required_error: 'Campo obrigatório' })
      .regex(/^\d{9}[A-Z]{2}\d{3}$/g, 'Deve ser um NIF válido'),
    occupation: z.string({ required_error: 'Campo obrigatório' }),
    birthDate: z.date({ required_error: 'Campo obrigatório' }),
    gender: z.enum(['male', 'female', 'other'], {
      required_error: 'Campo obrigatório',
    }),
  }),
  address: z.object({
    country: z.string({ required_error: 'Campo obrigatório' }),
    province: z.string({ required_error: 'Campo obrigatório' }),
    neighbor: z.string({ required_error: 'Campo obrigatório' }),
    district: z.string({ required_error: 'Campo obrigatório' }),
    coordinates: z
      .object({
        latitude: z.number().optional(),
        longitude: z.number().optional(),
      })
      .optional(),
  }),
});

export type SignUpFormType = z.infer<typeof signUpSchema>;

export default signUpSchema;
