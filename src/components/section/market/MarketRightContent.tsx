"use client";

import MarketProductCard from "@/components/shared/cards/MarketProductCard";
import { RotateCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import productService from "@/services/product.service";
import { MarketProduct } from "@/constants/type";

export default function MarketRightContent() {
  const [data, setData] = useState<MarketProduct[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData: MarketProduct[] = await productService.getProduct();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="market__right flex flex-col gap-4 flex-1 w-full lg:px-6">
      <div className="w-full flex items-center justify-end gap-4">
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

      <div className="w-full flex justify-end items-center">
        <p className="w-fit">6 produits trouvées</p>
      </div>

      <div className="market__products w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {data.map((item, id) => (
          <MarketProductCard
            key={id}
            id={id}
            ref={item.ref}
            name={item.name}
            image_url={item.image_url}
            price_unity={item.price_unity}
            unity={item.unity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
