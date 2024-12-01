"use client"

import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

type WindowProps = {
    isOpen?: boolean
}

const ChatbotWindow: FC<WindowProps> = ({ isOpen = true }): JSX.Element => {
    return (
        <div className={`chatbot-window w-[305px] max-h-[400px] bg-white shadow-xl rounded-xl overflow-hidden dark:bg-darkBackground  ${isOpen ? "flex flex-col" : "hidden"}`}>
            <header className="p-5 py-4 flex items-start justify-between gap-7 w-full inter-tight text-secondary dark:text-white bg-[#eeecec]">
                Fihary Bot
                <X size={20} />
            </header>
            <Separator />
            <div className="messages flex-1 px-5 py-4 flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
                <div className="bot-message w-full flex justify-start">
                    <div className="border border-input max-w-[75%] p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl">
                        <p className="text-secondary/85 text-sm">Bonjour je suis un assistant virtuel pour vous assister!</p>
                    </div>
                </div>
                <div className="bot-message w-full flex justify-end">
                    <div className="bg-primary-foreground max-w-[75%] p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl">
                        <p className="text-white text-sm">Bonjour, je veux en savoir plus sur l'agriculture moderne</p>
                    </div>
                </div>
                <div className="bot-message w-full flex justify-start">
                    <div className="border border-input max-w-[75%] p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl">
                        <p className="text-secondary/85 text-sm">Bonjour je suis un assistant virtuel pour vous assister!</p>
                    </div>
                </div>
            </div>
            <div className="input px-3 flex gap-2 py-4">
                <input type="text" className="border rounded-full  text-secondary/90 focus:outline-none dark:border dark:border-input dark:bg-transparent items-center bg-white pl-3 ring-offset-background focus-within:ring-1 focus-within:ring-offset-primary-foreground focus-within:ring-offset-2 font-normal flex-1 h-[40px] p-3 text-sm" placeholder="Posez vos questions..." />
                <Image src="/icons/send-icon.svg" alt="send-icon" width={30} height={30} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default ChatbotWindow;