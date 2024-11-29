import LoginForm from "@/components/shared/forms/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="login w-full min-h-screen overflow-x-hidden flex">
      <div className="login__form w-full md:w-[45%] min-h-screen px-6 md:px-24 py-12 flex justify-center items-center">
        <div className="h-fit w-full max-w-[416px] flex flex-col gap-8">
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

          <div className="flex flex-col gap-4">
            <div className="w-full h-fit">
              <p className="text-secondary-2">
                Se connecter à votre compte en entrant les informations du
                formulaire.
              </p>
            </div>
            <LoginForm />
          </div>

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
      <div className="login__image w-[55%] min-h-screen bg-[url('/img/login-bg.png')] bg-cover bg-center hidden md:block">
        <div className="bg-gradient-to-r from-[#21212159]/35 to-[#42424233]/20 w-full h-full flex flex-col justify-end items-center p-8 gap-2">
          <h1 className="text-2xl text-white font-bold">
            La plateforme dédiée aux produits agricoles
          </h1>
          <p className="text-white w-[480px] text-center">
            Achetez des produits agricoles de qualité sur une plateforme simple
            et fiable.
          </p>
        </div>
      </div>
    </section>
  );
}
