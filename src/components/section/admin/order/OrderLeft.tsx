"use client"

import InprogressOrder from "@/app/admin/order/InprogressOrder";
import StatCard from "@/components/shared/cards/StatCard";
import { generalStatistics } from "@/constants/__mock__/adminMock";
import { FC } from "react";

const OrderLeft: FC = (): JSX.Element => {
    return (
        <div className="admin__order__left w-full xl:w-[75%] flex flex-col gap-10">
            <div className="general__stat w-full grid sm2:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                    icon="/icons/shopping-cart.svg"
                    id={1}
                    title="Commandes en cours"
                    data={generalStatistics.orders}
                    className="bg-[#FFC10726]"
                />

                <StatCard
                    icon="/icons/user-2.svg"
                    id={2}
                    title="Box actifs"
                    data={generalStatistics.activeBox}
                    className="bg-[#FF3D0026]"
                />

                <StatCard
                    icon="/icons/shopping-cart-2.svg"
                    id={3}
                    title="Vente réalisée"
                    data={generalStatistics.orders}
                    className="bg-[#2A9D9026]"
                />
            </div>
            <InprogressOrder />
        </div>
    );
};

export default OrderLeft;