"use client"

import "@dotlottie/react-player/dist/index.css";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { useTheme } from "next-themes";

// email-lotties.lottie
const SendCode: FC = (): JSX.Element => {
    const email = decodeURIComponent(useParams().email as string);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <div className="signup__content max-w-[410px] md:max-w-[420px] lg:max-w-[420px] w-full flex flex-col gap-5 items-center mt-10 mb-10 px-6 md:px-0 relative z-30">
            <Image
                src={theme === "dark" ? "/icons/logo-dark.svg" : "/icons/logo-2.svg"}
                width={100}
                height={100}
                alt="Fihary logo"
                className="w-[96px]"
            />
            <h2 className="inter-tight text-2xl md:text-3xl text-center text-secondary dark:text-white">Consultez votre email</h2>
            <p className="text-secondary-2 text-center dark:text-darkGray">Un email de vérification a été envoyé à l’adresse email <b className="text-primary-foreground">{email}</b>. Veuillez vérifiez vérifier votre boite de réception</p>
            <DotLottiePlayer
                autoplay={true}
                loop={true}
                src="/lotties/email-lotties.lottie"
                style={{ width: "100%", height: "13em", objectFit: "cover" }}
            />
            <Button variant={"outline"} className="bg-secondary-2 h-[40px] px-6 rounded-full text-white mt-4">
                Renvoyer
            </Button>
        </div>
    );
};

export default SendCode;