"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderTypes } from "@/constants/type";
import Image from "next/image";
import { FC } from "react";
import ConfirmorderDialog from "../dialogs/ConfirmorderDialog";
import CancelorderDialog from "../dialogs/CancelorderDialog";

const OrderCard: FC<OrderTypes> = ({ orderItem, status, order_ticket }): JSX.Element => {
    return (
        <Card className="p-5 flex flex-col gap-8 dark:bg-darkBackground">
            <CardHeader className="p-0">
                <CardTitle className="flex justify-between gap-10 items-center">
                    <h4 className="font-medium text-secondary dark:text-white">{order_ticket}</h4>
                    <span className={`status text-sm font-medium ${status === "En attente" ? "text-red-500" : "Annulé" ? "text-gray-500" : "text-primary-foreground"}`}>
                        {status}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                {orderItem.map((item, index) => (
                    <div className="order-item flex items-center justify-between w-full" key={index}>
                        <div className="left flex gap-2">
                            <img src={item.img_url} alt={`${item.name}-image`} className="w-[50px] h-[50px] border border-input rounded-xl" />
                            <div className="flex flex-col gap-1">
                                <h3 className="inter-tight text-secondary dark:text-white text-sm">{item.name}</h3>
                                <p className="text-secondary-2 text-sm">{item.quantity}{item.unity}</p>
                            </div>
                        </div>
                        <Image src="/icons/more.svg" alt="" height={20} width={20} className="cursor-pointer" />
                    </div>
                ))}
            </CardContent>
            <CardFooter className="p-0 flex gap-3">
                <CancelorderDialog />
                <ConfirmorderDialog />
            </CardFooter>
        </Card>
    );
};

export default OrderCard;