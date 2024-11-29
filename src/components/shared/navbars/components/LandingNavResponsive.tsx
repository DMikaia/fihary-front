import { landingNav } from "@/constants/constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavProps {
  activeLink: string;
  isOpen: boolean;
}

export default function LandingNavResponsive({
  activeLink,
  isOpen,
}: NavProps) {
  return (
    <div
      className={`landing__nav__responsive bg-gray h-[calc(100vh_-_92px)] max-w-[250px] md:max-w-[300px] block w-full fixed right-0 px-5 md:px-10 py-12 z-50 lg:hidden ${
        isOpen
          ? "gap-0 p-0 ease-out duration-200 right-0"
          : "gap-8 p-8 ease-in duration-200 right-[-100%]"
      }`}
    >
      <div className="container mx-auto overflow-x-hidden w-full flex flex-col items-start gap-16 h-full">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          {landingNav.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className={`${
                activeLink === item.url ? "text-[#A1D83B]" : "text-secondary-2"
              } hover:text-[#A1D83B] duration-200 ease-linear text-base w-fit text-left`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-4">
          <Button variant={"ghost"}>Se connecter</Button>
          <Button className="text-white">S&apos;inscrire</Button>
        </div>
      </div>
    </div>
  );
}
