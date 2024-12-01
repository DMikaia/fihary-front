"use client";

import OrderDialog from "@/components/shared/dialogs/OrderDIalog";
import "@dotlottie/react-player/dist/index.css";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/redux/store";
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import React, { FC, useEffect } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  calculateTotal,
  decrease,
  increase,
} from "@/lib/redux/slices/cart-slice";

/* eslint-disable @next/next/no-img-element */
const Cart: FC = (): JSX.Element => {
  const { total, items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <div className="cart my-14 w-full">
      <header className="flex items-center gap-4">
        <h3 className="text-lg">Votre panier</h3>
        <span className="text-secondary-2 underline">Vider</span>
      </header>
      <div className="cart__items mt-5 w-full">
        {total === 0 ? (
          <div className="cart-empty mt-8 flex flex-col gap-3">
            <DotLottiePlayer
              autoplay={true}
              loop={true}
              src="/lotties/cart-lottie.lottie"
              style={{ width: "100%", height: "7em", objectFit: "cover" }}
            />
            <p className="text-center text-sm text-secondary-2">
              Votre panier est vide
            </p>
          </div>
        ) : (
          <div>
            {items.map((item, id) => (
              <div key={id} className="item flex gap-8 md:gap-3 items-center">
                <img
                  src={item.img}
                  alt={`cart-item_${id}`}
                  className="border border-[#BEBEBE] rounded- w-[50px] h-[50px]"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-secondary dark:text-white font-semibold inter-tight">
                      {item.name}{" "}
                      <span className="text-secondary/70 dark:text-white font-medium text-sm inter-tight">
                        ({item.price} Ar/{item.unit})
                      </span>
                    </h3>
                    <div className="flex gap-4 justify-start items-center">
                      <Button
                        onClick={() => dispatch(decrease(item.id))}
                        variant={"ghost"}
                        className="px-1 py-1 w-fit h-fit bg-secondary-2/15 hover:bg-secondary-02/20"
                      >
                        <Minus size={16} />
                      </Button>
                      <p className="text-secondary dark:text-white">
                        {item.quantity}
                      </p>
                      <Button
                        onClick={() => dispatch(increase(item.id))}
                        variant={"ghost"}
                        className="px-1 py-1 w-fit h-fit bg-secondary-2/15 hover:bg-secondary-02/20"
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <OrderDialog total={total} />
    </div>
  );
};

export default Cart;
