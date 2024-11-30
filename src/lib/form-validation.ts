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

const orderFormSchema = z.object({
  mobileNumber: z
    .string()
    .min(10, { message: "Le numéro mobile doit être 10 chiffres" }),
  location: z.string().min(8, { message: "Une adresse est requise" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;
type SignupFormSchema = z.infer<typeof signupFormSchema>;
type OrderFormSchema = z.infer<typeof orderFormSchema>;

export type { LoginFormSchema, SignupFormSchema, OrderFormSchema };
export { loginFormSchema, signupFormSchema, orderFormSchema };
