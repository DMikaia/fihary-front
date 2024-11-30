"use client"

import { FC } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { Button } from "@/components/ui/button";

const SellingsuccessDialog: FC = (): JSX.Element => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-foreground hover:bg-primary-foreground/60 rounded-xl h-[40px] w-full">Confirmer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[432px] gap-8 max-h-[544px] overflow-y-auto 2xl:h-fit flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle className="text-xl text-secondary inter-tight text-center">
                        Achat effectué avec succès !
                    </DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                </DialogHeader>

                <div className="w-full flex flex-col gap-4 mt-7">
                    <DotLottiePlayer
                        autoplay={true}
                        loop={true}
                        src="/lotties/success-lottie.lottie"
                        style={{ width: "100%", height: "12em", objectFit: "cover" }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SellingsuccessDialog;