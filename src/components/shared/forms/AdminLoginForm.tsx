"use client";

import {
  adminFormSchema,
  AdminFormSchema,
  loginFormSchema,
  LoginFormSchema,
} from "@/lib/form-validation";
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
import authServices from "@/services/auth.services";
import { useToast } from "@/hooks/use-toast";

export default function AdminLoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<AdminFormSchema>({
    resolver: zodResolver(adminFormSchema),
    defaultValues: {
      email: "",
      password: "",
      ref: "",
    },
  });

  const handleSubmit = async (data: AdminFormSchema) => {
    setLoading(true);
    const loginResponse = await authServices.adminLogin(data);

    if (loginResponse.status === 200) {
      toast({
        title: "Utilisateur authentifié avec succés!",
      });
    } else {
      toast({
        title: "Un erreur s'est produit!",
        description: "Veuillez valider les données entrées",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full flex flex-col gap-7 items-end"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="ref"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="text-base"
                  type="text"
                  placeholder="Votre ref"
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
              <FormControl>
                <Input
                  className="text-base"
                  type="email"
                  placeholder="Votre email"
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
              <FormControl>
                <Input
                  className="text-base"
                  type={`${show ? "text" : "password"}`}
                  placeholder="Votre mot de passe"
                  clear={false}
                  suffix={
                    show ? (
                      <EyeIcon
                        size={20}
                        onClick={() => setShow(!show)}
                        className="text-secondary dark:text-white mr-4"
                      />
                    ) : (
                      <EyeOffIcon
                        size={20}
                        onClick={() => setShow(!show)}
                        className="text-secondary dark:text-white mr-4"
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
          {loading ? "Connexion en cours..." : "Se connecter"}
        </Button>
      </form>
    </FormProvider>
  );
}
