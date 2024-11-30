"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FC } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const CancelorderDialog: FC = (): JSX.Element => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#BEBEBE] hover:bg-[#BEBEBE]/60 rounded-xl h-[40px] w-full">Retourner</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[432px] gap-8 max-h-[544px] overflow-y-auto 2xl:h-fit flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle className="text-xl text-secondary inter-tight text-center">
                        Etes-vous sur de vouloir retourner la commande: #FE6487 ?
                    </DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                </DialogHeader>

                <div className="w-full flex flex-col gap-4 mt-3">
                    <DotLottiePlayer
                        autoplay={true}
                        loop={true}
                        src="/lotties/cancel-lottie.lottie"
                        style={{ width: "100%", height: "12em", objectFit: "cover" }}
                    />
                </div>
                <hr className="bg-secondary-2 w-full mt-3" />
                <DialogFooter className="flex gap-2 w-full">
                    <Button className="bg-[#BEBEBE] hover:bg-[#BEBEBE]/60 rounded-xl h-[40px] w-full">Retourner</Button>
                    <Button className="bg-red-500 hover:bg-red-500/60 rounded-xl h-[40px] w-full">Confirmer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CancelorderDialog;