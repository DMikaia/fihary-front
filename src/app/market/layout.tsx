"use client"

import UserPlaceNav from "@/components/shared/navbars/UserPlaceNav";
import { FC, ReactNode } from "react";

type MarketplaceLayoutProps = {
    children: ReactNode;
}

const MarketplaceLayout: FC<MarketplaceLayoutProps> = ({ children }): JSX.Element => {
    return (
        <section className="marketplace w-full overflow-hidden">
            <UserPlaceNav />
            {children}
        </section>
    );
};

export default MarketplaceLayout;