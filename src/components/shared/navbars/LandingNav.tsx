"use client";

import LandingNavResponsive from "./components/LandingNavResponsive";
import { toggleNav } from "@/lib/redux/slices/nav-slice";
import { useDispatch, useSelector } from "react-redux";
import { landingNav } from "@/constants/constant";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import Link from "next/link";

export default function LandingNav() {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div className="h-[92px] relative">
      <nav className="landing__nav w-full h-[92px] overflow-x-hidden px-6 md:px-8 py-8">
        <div className="container mx-auto w-full flex justify-between items-center">
          <Image
            src={"/icons/logo-2.svg"}
            width={112}
            height={31}
            alt="Fihary logo"
            className="w-[96px]"
          />

          <div className="hidden lg:flex justify-center items-center gap-4">
            {landingNav.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`${
                  pathName === item.url ? "text-[#A1D83B]" : "text-secondary-2"
                } hover:text-[#A1D83B] duration-200 ease-linear text-base`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex gap-4 items-center justify-center">
            <Button variant={"ghost"}>Se connecter</Button>
            <Button>S&apos;inscrire</Button>
          </div>

          <Button
            variant={"ghost"}
            className="block lg:hidden bg-transparent hover:bg-transparent w-fit h-fit p-1 rounded-lg"
            onClick={() => dispatch(toggleNav())}
          >
            <Image
              src={"/icons/menu.svg"}
              width={20}
              height={20}
              alt="Menu icon"
            />
          </Button>
        </div>
      </nav>

      <LandingNavResponsive activeLink={pathName} isOpen={isOpen} />
    </div>
  );
}
