"use client"

import FacialRecognitionDialog from "@/components/shared/dialogs/FacialRecognitionDialog";
import AdminLoginForm from "@/components/shared/forms/AdminLoginForm";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const AdminLogin: FC = (): JSX.Element => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }
    return (
        <section className="w-full overflow-hidden min-h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-[380px] flex flex-col gap-6 items-center mt-10 mb-10">
                <Image
                    src={theme === "dark" ? "/icons/logo-dark.svg" : "/icons/logo-2.svg"}
                    width={100}
                    height={100}
                    alt="Fihary logo"
                    className="w-[100px]"
                />

                <h2 className="inter-tight leading-tight text-[1.9em] text-secondary dark:text-white text-center">Se connecter en tant qu'Administrateur</h2>
                <AdminLoginForm />
                <div className="or flex items-center gap-3 w-full">
                    <div className="line flex-1 h-[1px] bg-input dark:bg-darkBackground/60"></div>
                    <p className="text-secondary dark:text-white">OU</p>
                    <div className="line flex-1 h-[1px] bg-input dark:bg-darkBackground/60"></div>
                </div>

                <FacialRecognitionDialog />
            </div>
        </section>
    );
};

export default AdminLogin;