"use client";

import { loginFormSchema, LoginFormSchema } from "@/lib/form-validation";
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

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginFormSchema) => {
    setLoading(true);

    console.log(data);

    // setLoading(false);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full flex flex-col gap-4 items-end"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
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
              <FormLabel className="text-base">Mot de passe</FormLabel>
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

        <p className="text-[#1976D2] mt-2 cursor-pointer">
          Mot de passe oublié?
        </p>

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
