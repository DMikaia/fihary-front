import { MARKET_ORDER_MOCK } from "@/constants/__mock__/marketMock";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import OrderForm from "../forms/OrderForm";

interface OrderProps {
  total: number;
}

export default function OrderDialog({ total }: OrderProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={total === 0}
          className={`bg-primary-foreground hover:bg-primary-foreground/75 text-sm w-full mt-10 py-6 rounded-xl`}
        >
          Confirmer - Total {total} Ar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[432px] gap-8 h-[544px] overflow-y-auto 2xl:h-fit">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Confirmation de commande
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>

        <div className="w-full flex flex-col gap-4">
          {MARKET_ORDER_MOCK.map((item, id) => (
            <div key={id} className="w-full flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <Image
                  src={item.imgUrl}
                  width={72}
                  height={72}
                  alt={`cart_item_${id}`}
                  className="rounded-lg border"
                />

                <div className="flex flex-col justify-center gap-2">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="inter-tight">
                    {item.price} Ar/{item.unit}
                  </p>
                </div>
              </div>

              <div className="text-right flex flex-col gap-1">
                <p>{item.price * item.quantity} Ar</p>
                <div className="flex gap-2 items-center">
                  <Button
                    variant={"ghost"}
                    className={
                      "ghost w-fit h-fit p-1 bg-gray hover:bg-gray/95"
                    }
                  >
                    <Minus size={16} className="stroke-secondary" />
                  </Button>
                  <p>{item.quantity}</p>
                  <Button
                    variant={"ghost"}
                    className={
                      "ghost w-fit h-fit p-1 bg-gray hover:bg-gray/95"
                    }
                  >
                    <Plus size={16} className="stroke-secondary" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="bg-secondary-2 w-full" />

        <OrderForm total={total} />
      </DialogContent>
    </Dialog>
  );
}
