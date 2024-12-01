"use client"

import ChatbotContainer from "@/components/shared/chatbot/ChatbotContainer";
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
            <ChatbotContainer />
        </section>
    );
};

export default MarketplaceLayout;