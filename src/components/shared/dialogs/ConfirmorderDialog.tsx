"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FC } from "react";
import SellingsuccessDialog from "./SellingsuccessDialog";

const ConfirmorderDialog: FC = (): JSX.Element => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-foreground hover:bg-primary-foreground/75 text-sm w-full h-[40px] rounded-xl">
                    Confirmer
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[432px] gap-8 max-h-[544px] overflow-y-auto 2xl:h-fit">
                <DialogHeader>
                    <DialogTitle className="text-xl text-secondary inter-tight">
                        Confirmer la commande: #FE6487
                    </DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                </DialogHeader>

                <div className="w-full flex flex-col gap-4">
                    <div className="order-item flex items-center justify-between w-full">
                        <div className="left flex gap-2 items-center">
                            <img src="/img/mockdata/market-product-2.png" alt="order-image" className="w-[50px] h-[50px] border border-input rounded-lg" />
                            <h3 className="inter-tight text-secondary text-sm">Anandrano</h3>
                        </div>
                        <p className="text-secondary/85 text-sm">20 Kg</p>
                    </div>
                    <div className="order-item flex items-center justify-between w-full">
                        <div className="left flex gap-2 items-center">
                            <img src="/img/mockdata/market-product-2.png" alt="order-image" className="w-[50px] h-[50px] border border-input rounded-lg" />
                            <h3 className="inter-tight text-secondary text-sm">Anandrano</h3>
                        </div>
                        <p className="text-secondary/85 text-sm">20 Kg</p>
                    </div>
                    <div className="order-item flex items-center justify-between w-full">
                        <div className="left flex gap-2 items-center">
                            <img src="/img/mockdata/market-product-2.png" alt="order-image" className="w-[50px] h-[50px] border border-input rounded-lg" />
                            <h3 className="inter-tight text-secondary text-sm">Anandrano</h3>
                        </div>
                        <p className="text-secondary/85 text-sm">20 Kg</p>
                    </div>
                </div>
                <hr className="bg-secondary-2 w-full" />
                <DialogFooter className="flex gap-2">
                    <Button className="bg-[#BEBEBE] hover:bg-[#BEBEBE]/60 rounded-xl h-[40px] w-full">Retourner</Button>
                    <SellingsuccessDialog />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmorderDialog;