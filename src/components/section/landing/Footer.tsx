import {
  FOOTER_LINKS,
  FOOTER_OTHERS,
  FOOTER_SOCIALS,
} from "@/constants/constant";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-8 bg-white mt-20 pt-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-between items-start">
        <div className="flex flex-col gap-4">
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

        <div className="footer__links flex flex-col gap-4 justify-start">
          <h2 className="text-lg lg:text-xl text-primary font-semibold inter-tight">
            Liens utiles
          </h2>
          {FOOTER_LINKS.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer__others flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-primary font-semibold inter-tight">
            Autres
          </h2>
          {FOOTER_OTHERS.map((item, id) => (
            <p
              key={id}
              className="text-sm lg:text-base text-secondary-2 hover:text-primary-foreground cursor-pointer duration-200 ease-linear"
            >
              {item.label}
            </p>
          ))}
        </div>

        <div className="footer__socials flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-primary font-semibold inter-tight">
            Contactez nous
          </h2>
          {FOOTER_SOCIALS.map((item, id) => (
            <div key={id} className="flex gap-2">
              <Image
                src={item.img}
                width={24}
                height={24}
                alt={`logo of ${item.name}`}
              />
              <p className="text-sm lg:text-base  text-secondary-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
