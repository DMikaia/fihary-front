import { z } from "zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" }),
});

const signupFormSchema = z.object({
  fullname: z.string().min(8, { message: "Nom complet" }),
  mobilenumber: z
    .string()
    .min(8, { message: "Le numéro mobile doit être 10 chiffres" }),
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit être au moins 8 caractères" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;
type SignupFormSchema = z.infer<typeof signupFormSchema>;

export type { LoginFormSchema, SignupFormSchema };
export { loginFormSchema, signupFormSchema };
