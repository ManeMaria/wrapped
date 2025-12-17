import { z } from 'zod';

export const emailLoginSchema = z
  .email("Email inválido")
  .trim()
  .toLowerCase()
  .endsWith("@loomi.com.br", "Use um email @loomi.com.br");


export const loginSchema = z.object({
  email: emailLoginSchema,
  password: z
    .string()
    .trim()
    .regex(/^\d+$/, "Use apenas números")
    .length(8, "Use 8 dígitos (DDMMAAAA)")
});

export type LoginFormType = z.infer<typeof loginSchema>;
