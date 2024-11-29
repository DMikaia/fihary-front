"use client";

import LoginSlider from "@/components/section/login/LoginSlider";
import LoginForm from "@/components/shared/forms/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="login w-full min-h-screen overflow-x-hidden flex">
      <div className="login__form w-full md:w-[45%] px-6 md:px-24 py-12 flex justify-center items-center">
        <div className="h-fit w-full max-w-[416px] flex flex-col gap-5">
          <Image
            src={"/icons/logo.svg"}
            width={112}
            height={31}
            alt="Fihary logo"
            className="w-[96px]"
          />

          <h1 className="text-secondary text-3xl w-fit font-bold">
            Se connecter
          </h1>

          <div className="w-full h-fit">
            <p className="text-secondary-2">
              Se connecter à votre compte en entrant les informations du
              formulaire.
            </p>
          </div>

          <LoginForm />

          <div className="or flex items-center gap-3">
            <div className="or flex items-center gap-3 w-full">
              <div className="line flex-1 h-[1px] bg-black/40"></div>
              <p className="text-secondary">Ou</p>
              <div className="line flex-1 h-[1px] bg-black/40"></div>
            </div>

            <Button variant={"outline"} className="border-secondary-02 h-[45px]">
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
        </div>
        <div className="login__image w-[55%] min-h-screen hidden md:block">
          <LoginSlider />
        </div>
      </div>
    </section>
  );
}
