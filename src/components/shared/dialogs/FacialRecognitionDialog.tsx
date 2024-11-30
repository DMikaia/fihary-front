"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { loadAndSetReady } from "@/lib/facial";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, Fragment, useEffect, useState } from "react";

const FacialRecognitionDialog: FC = (): JSX.Element => {
    const WebCamDynamic = dynamic(
        () => import("../webcams/FacialWebcam"),
        { ssr: false }
    );
    const router = useRouter();

    const [isReady, setIsReady] = useState<boolean>(false);
    const [isAuthentificated, setAuthentificated] = useState<string>("");

    useEffect(() => {
        loadAndSetReady(setIsReady);
    }, []);

    useEffect(() => {
        if (isAuthentificated === "Authentificated") {
            router.push("/home")
        }
    }, [isAuthentificated, router]);

    const reScan = () => {
        setAuthentificated("");
    }

    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className="border-secondary-02 h-[45px] w-full">
                    <Image
                        src={theme === "dark" ? "/icons/facial-recognition-white.svg" : "/icons/facial-recognition.svg"}
                        alt="Logo of Google"
                        width={20}
                        height={20}
                    />
                    <p className="text-secondary dark:text-white text-base ml-1">
                        Par reconnaissance faciale
                    </p>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-input sm:max-w-[445px] h-[470px] p-0">
                <DialogHeader className="h-full flex items-center justify-end">
                    {isReady === false && isAuthentificated === "" && (
                        <div className="absolute w-full h-full bg-[#000000da] rounded-lg flex items-center justify-center">
                            <h3 className="text-white">Chargement de la caméra...</h3>
                        </div>
                    )}
                    {isAuthentificated === "" && isReady === true && (
                        <Fragment>
                            <div className="absolute w-full h-full">
                                <WebCamDynamic handleAuthentificated={setAuthentificated} isReady={isReady} />
                            </div>

                            <DialogTitle className="relative z-30">
                                {<span className="text-white text-shadow flex gap-3 items-center pb-4">
                                    <Image
                                        src="/icons/facial-recognition.svg"
                                        alt="facial-icons"
                                        width={21}
                                        height={21}
                                    />
                                    Montrez votre visage
                                </span>}
                            </DialogTitle>
                        </Fragment>
                    )}
                </DialogHeader>
                {isAuthentificated === "Authentificated" && isReady && isAuthentificated && (
                    <div className="absolute w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <DialogTitle className="text-secondary text-xl">Individu reconnu avec succés</DialogTitle>
                    </div>
                )}
                {isAuthentificated === "Unauthentificated" && isReady === true && (
                    <div className="absolute w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <div className="flex flex-col gap-4 items-center">
                            <DialogTitle className="text-red-500 text-xl">Individu non reconnu</DialogTitle>
                            <Button variant="outline" className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white" onClick={() => reScan()}>
                                Rescanner
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default FacialRecognitionDialog;