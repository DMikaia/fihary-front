"use client"

import OrderLeft from "@/components/section/admin/order/OrderLeft";
import OrderRight from "@/components/section/admin/order/OrderRight";

export default function Admin() {
    return (
        <section className="admin__order px-6 md:px-8 w-full flex flex-col lg:flex-row gap-8">
            <OrderLeft />
            <OrderRight />
        </section>
    );
}
