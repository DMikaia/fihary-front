"use client"

import { FC, useState } from "react";
import ChatbotWindow from "./ChatbotWindow";
import Image from "next/image";

const ChatbotContainer: FC = (): JSX.Element => {
    const [openDropdown, setOpendropdown] = useState<boolean>(false);
    return (
        <div className={`chatbot-container fixed bottom-10 right-10 flex gap-7 items-end`}>
            <ChatbotWindow />
            <div className="AI-avatar">
                <Image src="/icons/robot.svg" alt="bot-avatar" height={55} width={55} className="w-[60px] cursor-pointer hover:border hover:border-primary-foreground rounded-full" />
            </div>
        </div>
    );
};

export default ChatbotContainer;