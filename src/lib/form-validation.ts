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

const stockFormSchema = z.object({
  name: z.string().min(8, "Le nom du produit doit être au mois 8 caractères"),
  description: z
    .string()
    .min(8, "Le nom du produit doit être au mois 8 caractères"),
  unit: z.enum(["KILO", "BOTTE", "UNITY"]),
  category: z.string().min(1),
  price: z.string().min(0, "Le prix du produit est requis"),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;
type SignupFormSchema = z.infer<typeof signupFormSchema>;
type OrderFormSchema = z.infer<typeof orderFormSchema>;
type StockFormSchema = z.infer<typeof stockFormSchema>;

export type {
  LoginFormSchema,
  SignupFormSchema,
  OrderFormSchema,
  StockFormSchema,
};
export { loginFormSchema, signupFormSchema, orderFormSchema, stockFormSchema };
