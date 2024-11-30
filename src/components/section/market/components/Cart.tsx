"use client"

import React, { FC } from 'react';
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { Button } from '@/components/ui/button';

const Cart: FC = (): JSX.Element => {
    return (
        <div className="cart mt-14">
            <header className="flex items-center gap-4">
                <h3 className="text-lg">Votre panier</h3>
                <span className="text-secondary-2 underline">Effacer</span>
            </header>
            <div className="mt-8 flex flex-col gap-3">
                {/* cart-lottie.lottie */}
                <DotLottiePlayer
                    autoplay={true}
                    loop={true}
                    src="/lotties/cart-lottie.lottie"
                    style={{ width: "100%", height: "7em", objectFit: "cover" }}
                />
                <p className="text-center text-sm text-secondary-2">Votre panier est vide</p>
            </div>
            <Button className="bg-[#9E9E9E] w-full mt-10">
                Confirmer
            </Button>
        </div>
    );
};

export default Cart;