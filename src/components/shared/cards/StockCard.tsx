import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stock } from "@/constants/type";
import Image from "next/image";

interface Props {
  id: number;
}

export default function StockCard({
  id,
  name,
  description,
  price,
  quantity,
  unit,
  img,
}: Props & Stock) {
  return (
    <Card className="group w-full">
      <div className="h-[236px] relative w-full">
        <p className="absolute left-4 top-4 bg-[#1976D2] text-white p-2">
          {quantity} {unit}
        </p>
        <Image
          src={img}
          alt={`stock_card_${id}`}
          width={236}
          height={236}
          className="w-[236px] h-[236px] object-cover"
        />
      </div>

      <CardContent className="flex flex-row justify-between items-end">
        <div>
          <h1 className="inter-tight font-bold">{name}</h1>
          <p>{description}</p>
          <p className="text-lg">
            {price} Ar/{unit}
          </p>
        </div>

        <Button
          variant={"ghost"}
          className="group-hover:block hidden hover:bg-transparent w-fit h-fit p-0"
        >
          <Image
            src={"/icons/carbon-add.svg"}
            alt="add logo"
            width={40}
            height={40}
          />
        </Button>
      </CardContent>
    </Card>
  );
}
