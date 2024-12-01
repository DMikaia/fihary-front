"use client";

import { FC, useState } from "react";
import ChatbotWindow from "./ChatbotWindow";
import Image from "next/image";

const ChatbotContainer: FC = (): JSX.Element => {
    const [openDropdown, setOpendropdown] = useState<boolean>(false);

    return (
        <div className={`chatbot-container fixed bottom-5 md:bottom-10 right-5 md:right-10 flex flex-col md:flex-row gap-7 items-end`}>
            <ChatbotWindow isOpen={openDropdown} handleClose={(state) => setOpendropdown(state)} />
            <div className="AI-avatar" onClick={() => setOpendropdown(!openDropdown)}>
                <Image src="/icons/robot.svg" alt="bot-avatar" height={50} width={50} className="w-[60px] cursor-pointer hover:border hover:border-primary-foreground rounded-full" />
            </div>
        </div>
    );
};

export default ChatbotContainer;
