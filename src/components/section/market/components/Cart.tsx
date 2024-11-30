"use client";

import OrderDialog from "@/components/shared/dialogs/OrderDIalog";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { FC } from "react";

const Cart: FC = (): JSX.Element => {
  return (
    <div className="cart my-14 w-full">
      <header className="flex items-center gap-4">
        <h3 className="text-lg">Votre panier</h3>
        <span className="text-secondary-2 underline">Vider</span>
      </header>
      {/* <div className="cart-empty mt-8 flex flex-col gap-3">
                <DotLottiePlayer
                    autoplay={true}
                    loop={true}
                    src="/lotties/cart-lottie.lottie"
                    style={{ width: "100%", height: "7em", objectFit: "cover" }}
                />
                <p className="text-center text-sm text-secondary-2">Votre panier est vide</p>
            </div> */}
      <div className="cart__items mt-5 w-full">
        <div className="item flex gap-8 md:gap-3 items-center">
          <img
            src="/img/mockdata/cart-mockdata.png"
            alt="cart-item"
            className="border border-[#BEBEBE] rounded- w-[50px] h-[50px]"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-secondary font-semibold inter-tight">
                Anandrano{" "}
                <span className="text-secondary/70 font-medium text-sm">
                  (500 Ar/botte)
                </span>
              </h3>
              <div className="flex gap-4 justify-start items-center">
                <Button
                  // onClick={() => dispatch(decrease(index))}
                  variant={"ghost"}
                  className="px-1 py-1 w-fit h-fit bg-secondary-2/15 hover:bg-secondary-02/20"
                >
                  <Minus size={16} />
                </Button>
                <p className="text-secondary">1</p>
                <Button
                  // onClick={() => dispatch(increase(index))}
                  variant={"ghost"}
                  className="px-1 py-1 w-fit h-fit bg-secondary-2/15 hover:bg-secondary-02/20"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderDialog total={500} />
      {/* <Button className="bg-[#9E9E9E] w-full mt-10 rounded-xl">
                Confirmer
            </Button> */}
    </div>
  );
};

export default Cart;
