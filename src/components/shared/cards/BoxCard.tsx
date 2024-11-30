import { Card, CardContent } from "@/components/ui/card";
import { Box } from "@/constants/type";
import Image from "next/image";
import { Button } from "../../ui/button";

export default function BoxCard({ id, location, login, phone }: Box) {
  return (
    <Card className="w-full rounded-xl p-8 flex flex-col gap-8 dark:bg-darkBackground">
      <div className="flex gap-8 items-center">
        <div className="w-fit h-fit p-4 bg-[#A1D83B26] rounded-full">
          <Image
            src={"/icons/shop-green.svg"}
            alt={`box_card_${id}`}
            width={32}
            height={32}
          />
        </div>

        <div>
          <h1 className="text-secondary">{id}</h1>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-between items-center inter-tight">
          <p className="text-muted-foreground">Login</p>
          <p>{login}</p>
        </div>
        <div className="w-full flex justify-between items-center inter-tight">
          <p className="text-muted-foreground">Contact</p>
          <p>{phone}</p>
        </div>
      </div>

      <CardContent className="w-full p-0">
        <Button
          variant={"outline"}
          className="bg-transparent hover:bg-transparent border-muted-foreground text-muted-foreground w-full"
        >
          Afficher
        </Button>
      </CardContent>
    </Card>
  );
}
