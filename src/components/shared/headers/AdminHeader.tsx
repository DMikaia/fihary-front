"use client";

import AdminNavResponsive from "../navbars/components/AdminNavResponsive";
import { toggleNav } from "@/lib/redux/slices/nav-slice";
import { useDispatch, useSelector } from "react-redux";
import UserSearchForm from "../forms/UserSearchForm";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/redux/store";
import { usePathname } from "next/navigation";
import { AlignLeft } from "lucide-react";
import Image from "next/image";

export default function AdminHeader() {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { isOpen } = useSelector((state: RootState) => state.nav);

  return (
    <div className="h-9 w-full">
      <header className="w-full px-6 md:px-8 flex justify-between gap-14 items-center">
        <Button
          variant={"ghost"}
          onClick={() => dispatch(toggleNav())}
          className="block lg:hidden p-2 bg-transparent hover:bg-primary-foreground duration-200 ease-linear"
        >
          <AlignLeft size={24} className="stroke-secondary" />
        </Button>

        <h1 className="w-fit text-lg xl:text-xl font-semibold hidden lg:block text-secondary inter-tight">
          Bonjour Herifanantenana
        </h1>

        <div className="hidden lg:block">
          <UserSearchForm />
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src={"/icons/notification.svg"}
            width={24}
            height={24}
            alt="notification bell"
          />

          <p className="text-white p-1 w-[32px] h-[32px] flex justify-center items-center bg-[#F8BD00] rounded-full cursor-pointer">
            SR
          </p>
        </div>
      </header>

      <AdminNavResponsive activeLink={pathName} isOpen={isOpen} />
    </div>
  );
}
