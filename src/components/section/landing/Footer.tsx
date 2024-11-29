import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-8 bg-white mt-20 pt-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-between items-start md:items-center">
        <div className="flex flex-col gap-4 md:max-w-[288px] lg:max-w-[480px]">
          <Image
            src="/icons/logo-2.svg"
            width={112}
            height={31}
            alt="Logo of Fihary"
          />

          <p className="text-secondary-2">
            Plateforme dédiée à la promotion des produits agricoles locaux et
            au soutien des coopératives malagasy.{" "}
          </p>

          <Button className="text-white w-fit">
            <p>Nous contacter</p>
            <ArrowRight size={16} className="stroke-white" />
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-primary font-semibold">
            Liens utiles
          </h2>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            Nos produits
          </p>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            A propos
          </p>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            Nos formations
          </p>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            FAQ
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-primary font-semibold">
            Autres
          </h2>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            Conditions d&apos;utilisation
          </p>
          <p className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear">
            Mode nuit
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-primary font-semibold">
            Contactez nous
          </h2>
          <div className="flex gap-2">
            <Image
              src={"/icons/facebook.svg"}
              width={24}
              height={24}
              alt="logo of "
            />
            <p className="text-sm lg:text-base  text-secondary-2">Facebook</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/instagram.svg"}
              width={24}
              height={24}
              alt="logo of "
            />
            <p className="text-sm lg:text-base text-secondary-2">Instagram</p>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/icons/linkedin.svg"}
              width={24}
              height={24}
              alt="logo of "
            />
            <p className="text-sm lg:text-base text-secondary-2">LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
