"use client"

import { FC } from "react";
import AdminNotification from "../components/Notification";

const OrderRight: FC = (): JSX.Element => {
    return (
        <div className="admin__roder__right w-[30%] h-fit flex flex-col gap-10">
            <AdminNotification />
        </div>
    );
};

export default OrderRight;