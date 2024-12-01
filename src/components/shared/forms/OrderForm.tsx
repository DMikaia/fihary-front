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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import orderService from "../../../services/order.service";

interface OrderProps {
  total: number;
}

export default function OrderForm({ total }: OrderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [districts, setDistict] = useState<
    { id: number; name: string; city_id: number }[]
  >([]);
  const form = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      mobileNumber: "",
      location: "",
      quartier: "",
      city: "",
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
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Ville</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={async (e) => {
                      field.onChange(e); // Update the form state
                      const value = await orderService.getQuartier(Number(e));
                      if (value) {
                        setDistict(value);
                      }
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selectionner une ville" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        <SelectItem value={"1"}>
                          Antanarivo Renivohitra
                        </SelectItem>
                        <SelectItem value={"2"}>
                          Antanarivo Avaradrano
                        </SelectItem>
                        <SelectItem value={"3"}>
                          Antanarivo Antsimondrano
                        </SelectItem>
                        <SelectItem value={"4"}>
                          Antanarivo Ambohidratrimo
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quartier"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Quartier</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(e) => field.onChange(e)} // Update the form state
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selectionner un quartier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        {districts.map((item) => (
                          <SelectItem key={item.id} value={`${item.id}`}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
