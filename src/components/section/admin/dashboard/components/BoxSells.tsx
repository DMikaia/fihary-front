"use client";

import { SellsChart } from "@/components/shared/chart/SellsChart";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function BoxSells() {
  const settings = {
    speed: 400,
    slidesToScroll: 2,
    slidesToShow: 2,
    infinite: false,
  };

  return (
    <div className="box__monitoring w-full">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-lg font-semibold">Monitoring des box</h2>
        <Link href={"#"} className="flex gap-2 items-center">
          <p className="text-lg text-primary-foreground">Afficher tout</p>
          <Image
            src={"/icons/arrow-up-right.svg"}
            alt="Arrow up right"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <Slider {...settings} className="flex gap-4">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <SellsChart key={item} id={item} last={5} />
        ))}
      </Slider>
    </div>
  );
}
