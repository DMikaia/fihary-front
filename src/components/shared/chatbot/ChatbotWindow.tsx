"use client";

import { Separator } from "@/components/ui/separator";
import { AIchatSession } from "@/lib/GeminiModel";
import { X } from "lucide-react";
import Image from "next/image";
import React, { FC, useState } from "react";

type WindowProps = {
    handleClose: (state: boolean) => void;
    isOpen: boolean;
};

type ChatsTypes = {
    role: string;
    content: string;
};

const ChatbotWindow: FC<WindowProps> = ({ handleClose, isOpen }): JSX.Element => {
    const [chats, setChats] = useState<ChatsTypes[]>([{ role: "bot", content: "Bonjour, je suis un assistant virtuel pour vous assister!" }]);
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setChats((prevChat) => [...prevChat, { content: message, role: "user" }])
        setMessage("");

        const AImessage = await AIchatSession.sendMessage(`${message}, donne moi une reponse sans markdown`);
        setChats((prevChat) => [...prevChat, { content: AImessage.response.text(), role: "bot" }])
    }

    return (
        <div className={`chatbot-window w-full max-w-[310px] md:w-[315px] h-[390px] bg-white shadow-xl rounded-xl overflow-hidden dark:bg-darkBackground ${isOpen ? "flex flex-col" : "hidden"}`}>
            <header className="p-5 py-4 flex items-start justify-between gap-7 w-full inter-tight text-secondary dark:text-white bg-[#eeecec] dark:bg-darkGray">
                Fihary Bot
                <X size={20} className="cursor-pointer" onClick={() => handleClose(false)} />
            </header>
            <Separator />
            <div className="messages flex-1 px-5 py-4 flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
                {chats.map((chat, index) => (
                    <div key={index} className={`w-full flex ${chat.role === "bot" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[75%] p-3 rounded-tl-xl rounded-tr-xl ${chat.role === "bot" ? "border border-input dark:border-darkGray rounded-br-xl" : "bg-primary-foreground rounded-bl-xl"}`}>
                            <p className={`text-sm ${chat.role === "bot" ? "text-secondary/85 dark:text-white/85" : "text-white"}`}>
                                {chat.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <form className="input px-3 flex gap-2 py-4" onSubmit={handleSubmit} onChange={(e: any) => setMessage(e.target.value)}>
                <input type="text" name="message" className="border rounded-full dark:text-white dark:border-darkGray/50 text-secondary/90 focus:outline-none dark:border dark:bg-transparent items-center bg-white pl-3 ring-offset-background focus-within:ring-1 focus-within:ring-offset-primary-foreground focus-within:ring-offset-2 font-normal flex-1 h-[40px] p-3 text-sm" placeholder="Posez vos questions..." />
                <button type="submit">
                    <Image src="/icons/send-icon.svg" alt="send-icon" width={30} height={30} className="cursor-pointer" />
                </button>
            </form>
        </div>
    );
};

export default ChatbotWindow;
