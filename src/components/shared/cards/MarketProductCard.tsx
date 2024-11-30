import { MarketProduct } from "@/constants/type";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../../ui/button";

interface ProductProps {
  id: number;
}

export default function MarketProductCard({
  id,
  name,
  imgUrl,
  price,
  unit,
}: ProductProps & MarketProduct) {
  return (
    <Card className="w-full group flex flex-col justify-between border-transparent hover:border-primary-foreground duration-200 ease-in-out rounded-lg overflow-x-hidden">
      <Image
        src={imgUrl}
        alt={`product_${id}`}
        width={264}
        height={264}
        className="w-full"
      />
      <CardContent className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p>
            {price} Ar/{unit}
          </p>
        </div>

        <Button className="w-fit group-hover:flex hidden h-fit p-2 rounded-full bg-primary-foreground hover:bg-primary-foreground/95">
          <Image
            src={"/icons/add.svg"}
            alt="add icon"
            width={19.5}
            height={19.5}
            className="w-4"
          />
        </Button>
      </CardContent>
    </Card>
  );
}
