"use client"

import AdminLoginForm from "@/components/shared/forms/AdminLoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

const AdminLogin: FC = (): JSX.Element => {
    return (
        <section className="w-full overflow-hidden min-h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-[380px] flex flex-col gap-6 items-center mt-10 mb-10">
                <Image
                    src="/icons/logo-2.svg"
                    width={100}
                    height={100}
                    alt="Fihary logo"
                    className="w-[100px]"
                />

                <h2 className="inter-tight text-[1.9em] text-secondary text-center">Se connecter en tant qu'Administrateur</h2>
                <AdminLoginForm />
                <div className="or flex items-center gap-3 w-full">
                    <div className="line flex-1 h-[1px] bg-input dark:bg-darkBackground/60"></div>
                    <p className="text-secondary dark:text-white">OU</p>
                    <div className="line flex-1 h-[1px] bg-input dark:bg-darkBackground/60"></div>
                </div>

                <Button variant={"outline"} className="border-secondary-02 h-[45px] w-full">
                    <Image
                        src="/icons/facial-recognition.svg"
                        alt="Logo of Google"
                        width={20}
                        height={20}
                    />
                    <p className="text-secondary dark:text-white text-base ml-1">
                        Par reconnaissance faciale
                    </p>
                </Button>
            </div>
        </section>
    );
};

export default AdminLogin;