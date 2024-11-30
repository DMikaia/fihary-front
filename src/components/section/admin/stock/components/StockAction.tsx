"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Plus, RotateCcw, Search } from "lucide-react";

export default function StockAction() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 items-end">
      <Button className="flex gap-2 px-6 items-center w-fit">
        <Plus size={16} className="text-white" />
        <p>Ajouter</p>
      </Button>

      <div className="flex gap-4 items-center">
        <Input
          value={search}
          onChange={(e) => {
            if (search.length === 0 && !show) {
              setShow(true);
            }

            setSearch(e.target.value);
          }}
          placeholder="Rechercher un produit"
          suffix={<Search size={16} className="stroke-secondary-2" />}
          className="flex flex-row-reverse gap-2 w-fit h-10 pr-6"
        />

        <Select
          onValueChange={(e) => {
            if (sort.length === 0 && !show) {
              setShow(true);
            }

            setSort(e);
          }}
          defaultValue={sort}
          value={sort}
        >
          <SelectTrigger className="w-[188px] h-10">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="most-sells" className="flex gap-4">
              <p className="text-primary font-semibold">Plus achetés</p>
            </SelectItem>
            <SelectItem value="availability" className="flex gap-4">
              <p className="text-primary font-semibold">Disponibilité</p>
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={"outline"}
          className={`p-2 h-10 w-10 rounded-lg justify-center items-center ${
            show ? "flex" : "hidden"
          }`}
          onClick={() => {
            setShow(false);
            setSearch("");
            setSort("");
          }}
        >
          <RotateCcw size={16} className="stroke-secondary" />
        </Button>
      </div>
    </div>
  );
}
