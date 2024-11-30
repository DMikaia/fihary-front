"use client";

import { orderFormSchema, OrderFormSchema } from "@/lib/form-validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

interface OrderProps {
  total: number;
}

export default function OrderForm({ total }: OrderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      mobileNumber: "",
      location: "",
    },
  });

  const handleSubmit = (value: OrderFormSchema) => {
    setLoading(true);

    console.log(value);

    // setLoading(false);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Détails de livraison</h2>

          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Numéro à contacter</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    type="text"
                    placeholder="034 87 167 14 (Par défaut)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Adresse</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    type="text"
                    placeholder="ex: Lot IV Ter Ambohimasina"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <hr className="bg-secondary-2 w-full" />

        <div className="w-full flex justify-between items-center">
          <p>Total</p>
          <h1 className="text-2xl font-bold">{total} Ar</h1>
        </div>

        <Button
          type="submit"
          className="bg-primary-foreground hover:bg-primary-foreground/75 text-sm w-full py-6 rounded-xl"
          disabled={loading}
        >
          Payer avec Stripe
        </Button>
      </form>
    </FormProvider>
  );
}
