"use client";

import MarketLeftContent from "@/components/section/market/MarketLeftContent";
import MarketRightContent from "@/components/section/market/MarketRightContent";
import Image from "next/image";
import { FC } from "react";

const MarketPlace: FC = (): JSX.Element => {
  return (
    <section className="marketplace__content mt-[21vh]">
      <div className="container mx-auto px-10">
        <header className="flex flex-col gap-4">
          <div className="markdown flex items-center gap-3">
            <Image
              src="/icons/home-markdown.svg"
              alt="home-icon"
              height={23}
              width={23}
            />
            <p className="text-[#6E6E6E]">Marketplace /</p>
          </div>
          <h3 className="text-[#A1D83B] inter-tight text-4xl">Marketplace</h3>
          <p className="text-secondary-2">
            Trouvez des produits locaux, frais, et abordable à portée de clic
          </p>
        </header>

        {/* Content */}
        <div className="flex gap-9 mt-14">
          <MarketLeftContent />
          <MarketRightContent />
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
