"use client";

import { FC } from "react";
import MarketCategories from "./components/MarketCategories";
import Cart from "./components/Cart";

const MarketLeftContent: FC = (): JSX.Element => {
  return (
    <div className="market-left w-[280px]">
      <header className="flex items-center gap-4">
        <h3 className="inter-tight text-2xl text-secondary">Filtres</h3>
        <span className="text-secondary-2 underline">Effacer</span>
      </header>
      <MarketCategories />
      <div className="prices mt-5">
        <h3 className="text-lg">Price(5K-100K)</h3>
      </div>
      <Cart />
    </div>
  );
};

export default MarketLeftContent;
