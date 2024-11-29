"use client"

import SignupForm from "@/components/shared/forms/SignupForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Signup: FC = (): JSX.Element => {
    return (
        <div className="signup__content max-w-[410px] md:max-w-[420px] lg:max-w-[420px] w-full flex flex-col gap-5 items-center mt-10 mb-10 px-6 md:px-0 relative z-30">
            <Image alt="fihary-logo" height={100} width={100} src="/icons/logo.svg" />
            <h2 className="inter-tight text-2xl md:text-3xl text-center text-secondary">Prêt a démarrer sur <b>Fihary</b> ?
                Créér votre compte maintenant</h2>
            <p className="text-secondary-2 text-center max-w-[90%]">Entrez vos informations ci-dessous pour commencer</p>
            <SignupForm />
            <div className="or flex items-center gap-3 w-full">
                <div className="line flex-1 h-[1px] bg-input"></div>
                <p className="text-secondary">Ou</p>
                <div className="line flex-1 h-[1px] bg-input"></div>
            </div>

            <Button variant={"outline"} className="border-secondary-02 h-[45px] w-full">
                <Image
                    src="icons/google.svg"
                    alt="Logo of Google"
                    width={24}
                    height={24}
                />
                <p className="text-secondary text-base">
                    Se connecter avec Google
                </p>
            </Button>

            <p className="w-full text-center text-secondary">
                Pas encore de compte?{" "}
                <Link
                    href="/signup"
                    className="text-[#1976D2] cursor-pointer font-semibold"
                >
                    Créer un compte
                </Link>
            </p>
        </div>
    );
};

export default Signup;