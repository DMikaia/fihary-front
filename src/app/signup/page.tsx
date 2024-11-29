"use client"

import Image from "next/image";
import { FC } from "react";

const Signup: FC = (): JSX.Element => {
    return (
        <div className="signup__content max-w-[430px] w-full flex flex-col gap-5 items-center mt-10 mb-10">
            <Image alt="fihary-logo" height={100} width={100} src="/icons/logo.svg" />
            <h2 className="inter-tight text-3xl text-center text-secondary">Prêt a démarrer sur <b>Fihary</b> ?
                Créér votre compte maintenant</h2>
            <p className="text-secondary-2 text-center max-w-[90%]">Entrez vos informations ci-dessous pour commencer</p>
        </div>
    );
};

export default Signup;