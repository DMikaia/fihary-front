"use client";

import { signupFormSchema, SignupFormSchema } from "@/lib/form-validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import authServices from "@/services/auth.services";

export default function SignupForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();
    const [show, setShow] = useState<boolean>(false);
    const form = useForm<SignupFormSchema>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            email: "",
            password: "",
            fullname: "",
            phone_number: ""
        },
    });

    const handleSubmit = async (data: SignupFormSchema) => {
        setLoading(true);
        const signupResponse = await authServices.userSignup(data);

        if (signupResponse.status === 200) {
            toast({
                title: "Compte créé avec succés!",
            })
        }
        else {
            toast({
                title: "Un erreur s'est produit!",
                description: "Veuillez valider les données entrées",
                variant: "destructive"
            })
        }

        setLoading(false);
    };

    return (
        <FormProvider {...form}>
            <form
                className="w-full flex flex-col gap-5 items-end"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-base">Nom complet</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-base"
                                    type="text"
                                    placeholder="Rakotomalala Herifanantenana"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-base">Email</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-base"
                                    type="email"
                                    placeholder="rakotolalala@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-base">Numéro mobile</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-base"
                                    type="text"
                                    placeholder="03x xx xxx xx"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-base">Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-base"
                                    type={`${show ? "text" : "password"}`}
                                    placeholder="***********"
                                    clear={false}
                                    suffix={
                                        show ? (
                                            <EyeIcon
                                                size={20}
                                                onClick={() => setShow(!show)}
                                                className="text-secondary mr-4"
                                            />
                                        ) : (
                                            <EyeOffIcon
                                                size={20}
                                                onClick={() => setShow(!show)}
                                                className="text-secondary mr-4"
                                            />
                                        )
                                    }
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className="w-full mt-2 rounded-lg text-base h-[45px]"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Création du compte..." : "Créér un compte"}
                </Button>
            </form>
        </FormProvider>
    );
}
