"use client"

import OrderCard from "@/components/shared/cards/OrderCard";
import { OrderInProgressMock } from "@/constants/__mock__/adminMock";
import { FC } from "react";

const InprogressOrder: FC = (): JSX.Element => {
    return (
        <div className="inprogress-order w-full">
            <header className="flex items-center">
                <h2 className="text-lg text-secondary inter-tight">Commandes en cours</h2>
            </header>

            <div className="inprogress-order__content grid sm2:grid-cols-2 mt-5 gap-6 lg:ap-10">
                {
                    OrderInProgressMock.map((order, index) => (
                        <OrderCard key={index} {...order} />
                    ))
                }
            </div>
        </div>
    );
};

export default InprogressOrder;