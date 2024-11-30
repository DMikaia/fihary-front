"use client";

import { stockFormSchema, StockFormSchema } from "@/lib/form-validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../ui/button";
import DragAndDrop from "./DragAndDrop";

export default function StockForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<StockFormSchema>({
    resolver: zodResolver(stockFormSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
      unit: "KILO",
      category: "",
    },
  });

  const handleSubmit = (data: StockFormSchema) => {
    setLoading(true);

    const mapped_data = {
      ...data,
      img: file,
      price: Number(data.price),
    };

    console.log(mapped_data);

    // setLoading(false);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full flex flex-col gap-5 items-end"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <DragAndDrop onFileSelect={(file: File) => setFile(file)} />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base">Nom</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  type="text"
                  placeholder="ex: Ovy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base">Description</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  type="text"
                  placeholder="ex: Ovy"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex gap-5">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Prix</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    type="text"
                    placeholder="ex: 1000"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base">Unité</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-[48px]">
                        <SelectValue placeholder="Selectionner une catégorie" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="KILO">kilo</SelectItem>
                      <SelectItem value="BOTTE">botte</SelectItem>
                      <SelectItem value="UNITY">unité</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-base">Catégorie</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-[48px]">
                      <SelectValue placeholder="Selectionner une catégorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="fruits">fruits</SelectItem>
                    <SelectItem value="vegetables">légumes</SelectItem>
                    <SelectItem value="spices">épices</SelectItem>
                    <SelectItem value="legume">légumineuse</SelectItem>
                    <SelectItem value="dried-fruit">fruits secs</SelectItem>
                    <SelectItem value="cereals">céréales</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading}>Confirmer</Button>
      </form>
    </FormProvider>
  );
}
