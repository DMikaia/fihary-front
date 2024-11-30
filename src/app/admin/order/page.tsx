"use client"

import DashboardLeft from "@/components/section/admin/dashboard/DashboardLeft";
import OrderLeft from "@/components/section/admin/order/OrderLeft";

export default function Admin() {
    return (
        <section className="admin__order px-6 md:px-8 w-full mt-4">
            <OrderLeft />
        </section>
    );
}
