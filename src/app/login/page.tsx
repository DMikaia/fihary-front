"use client";

import LoginForm from "@/components/shared/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="login w-full min-h-screen h-full overflow-x-hidden flex">
      <div className="login__form w-full md:w-[45%] px-6 md:px-24 py-12 flex justify-center items-center min-h-screen">
        <div className="h-fit w-full max-w-[416px] flex flex-col gap-5">
          <Image
            src={theme === "dark" ? "/icons/logo-dark.svg" : "/icons/logo-2.svg"}
            width={112}
            height={31}
            alt="Fihary logo"
            className="w-[96px]"
          />

          <h1 className="text-secondary dark:text-white text-3xl w-fit font-bold inter-tight">
            Se connecter
          </h1>

          <div className="w-full h-fit">
            <p className="text-secondary-2 dark:text-darkGray">
              Se connecter à votre compte en entrant les informations du
              formulaire.
            </p>
          </div>

          <LoginForm />

          <div className="or flex items-center gap-3 w-full">
            <div className="line flex-1 h-[1px] bg-black/40 dark:bg-darkBackground/60"></div>
            <p className="text-secondary dark:text-white">Ou</p>
            <div className="line flex-1 h-[1px] bg-black/40 dark:bg-darkBackground/60"></div>
          </div>

          <Button variant={"outline"} className="border-secondary-02 h-[45px]">
            <Image
              src="icons/google.svg"
              alt="Logo of Google"
              width={24}
              height={24}
            />
            <p className="text-secondary dark:text-white text-base">
              Se connecter avec Google
            </p>
          </Button>

          <p className="w-full text-center text-secondary dark:text-white">
            Pas encore de compte?{" "}
            <Link
              href="/signup"
              className="text-[#1976D2] cursor-pointer font-semibold"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
      <div className="login__image w-[55%] bg-[url('/img/login-slider-1.png')] bg-cover bg-center min-h-screen hidden md:flex justify-center items-end px-6 py-5 text-center">
        <div className="min-h-screen py-8 w-full flex flex-col items-center justify-end gap-4">
          <h1 className="text-3xl text-white font-bold w-fit inter-tight">
            La plateforme dédiée aux produits agricoles
          </h1>
          <p className="text-white w-[480px] text-center">
            Achetez des produits agricoles de qualité sur une plateforme simple et fiable.
          </p>
        </div>
      </div>
    </section>
  );
}
