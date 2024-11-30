"use client";

import { ADMIN_NAV } from "@/constants/constant";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface AdminProps {
  activeLink: string;
  isOpen: boolean;
}

export default function AdminNavResponsive({
  activeLink,
  isOpen,
}: AdminProps) {
  return (
    <nav
      className={`min-h-screen bg-[#F5F5F5] h-[calc(100vh_-_100px)] max-w-[290px] md:max-w-[350px] top-[100px] block w-full fixed left-0 px-6 md:px-8 py-12 z-50 ${
        isOpen
          ? "gap-0 p-0 ease-out duration-200 left-0"
          : "gap-8 p-8 ease-in duration-200 left-[-100%]"
      }`}
    >
      <div className="mx-auto container w-full h-full flex flex-col gap-16">
        <Image
          src={"/icons/logo-2.svg"}
          width={112}
          height={31}
          alt="Logo of Fihary"
          className="w-[96px]"
        />

        <div className="flex flex-col gap-4">
          {ADMIN_NAV.map((item, id) => (
            <Link
              key={id}
              href={item.url}
              className={`w-full h-fit flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-primary-foreground duration-200 ease-linear ${
                item.url === activeLink
                  ? "bg-primary-foreground"
                  : "bg-transparent"
              }`}
            >
              <Image
                src={item.url === activeLink ? item.imgActive : item.img}
                width={16}
                height={16}
                alt={`item_${id}`}
                className="w-6"
              />

              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
