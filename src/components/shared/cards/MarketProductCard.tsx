import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/lib/redux/slices/cart-slice";
import { MarketProduct } from "@/constants/type";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";

export default function MarketProductCard({
  id,
  name,
  ref,
  price_unity,
  unity,
  image_url,
  category,
}: MarketProduct) {
  const { items } = useSelector((state: RootState) => state.cart);
  const isInCart = items.find((item) => item.id === id);
  const dispatch = useDispatch();

  return (
    <Card className="w-full group flex flex-col justify-between border-transparent  dark:bg-darkBackground hover:border-primary-foreground duration-200 ease-in-out rounded-lg overflow-x-hidden">
      <Image
        src={`${image_url}`}
        alt={`product_${id}`}
        width={264}
        height={264}
        className="w-full"
      />
      <CardContent className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-base lg:text-lg font-semibold">{name}</h1>
          <p className="text-sm md:text-base inter-tight">
            {price_unity} Ar/{unity}
          </p>
        </div>

        <Button
          disabled={isInCart !== undefined}
          onClick={() =>
            dispatch(
              add({
                id,
                img: image_url,
                name,
                price: price_unity,
                quantity: 1,
                unit: unity,
              })
            )
          }
          className="w-fit group-hover:flex hidden h-fit p-2 rounded-full bg-primary-foreground hover:bg-primary-foreground/95"
        >
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
