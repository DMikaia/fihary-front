"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MARKET_PRODUCT_MOCK } from "../../../constants/__mock__/marketMock";
import MarketProductCard from "../../shared/cards/MarketProductCard";

export default function MarketRightContent() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  return (
    <div className="market__right flex flex-col gap-4 flex-1 w-full">
      <div className="w-full flex items-center justify-end gap-4">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un produit"
          suffix={<Search size={16} className="stroke-secondary-2" />}
          className="flex flex-row-reverse gap-2 w-fit h-10 pr-6"
        />

        <Select onValueChange={(e) => setSort(e)} defaultValue={sort}>
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
      </div>

      <div className="w-full flex justify-end items-center">
        <p className="w-fit">6 produits trouvées</p>
      </div>

      <div className="market__products w-full grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {MARKET_PRODUCT_MOCK.map((item, id) => (
          <MarketProductCard
            key={id}
            id={id}
            name={item.name}
            imgUrl={item.imgUrl}
            price={item.price}
            unit={item.unit}
          />
        ))}
      </div>
    </div>
  );
}
