import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export type { LoginFormSchema };
export { loginFormSchema };
