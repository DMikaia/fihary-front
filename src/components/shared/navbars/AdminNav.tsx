"use client";

import { ADMIN_NAV } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathName = usePathname();

  return (
    <nav className="min-h-screen bg-[#F5F5F5] dark:bg-darkBackground py-12 px-8 w-[260px] xl:w-[280px] hidden lg:flex fixed top-0">
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
              className={`w-full h-fit flex gap-2 items-center px-4 py-2 rounded-lg hover:bg-primary-foreground duration-200 ease-linear ${item.url === pathName
                ? "bg-primary-foreground"
                : "bg-transparent"
                }`}
            >
              <Image
                src={item.url === pathName ? item.imgActive : item.img}
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
