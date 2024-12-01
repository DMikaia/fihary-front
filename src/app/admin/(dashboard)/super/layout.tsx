"use client";

import AdminHeader from "@/components/shared/headers/AdminHeader";
import { SUPER_ADMIN_NAV } from "@/constants/constant";
import AdminNav from "@/components/shared/navbars/AdminNav";
import { ReactNode, useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

type AdminProps = {
  children: ReactNode;
};

/* eslint-disable react-hooks/exhaustive-deps */
export default function AdminLayout({ children }: AdminProps) {
  const { getaccessToken, changeLoading } = useAuth();

  const checkAutorisation = async () => {
    if ((await getaccessToken("SUPER_ADMIN")) === "unhautorized") {
      if ((await getaccessToken("USER_USER")) === "authorized") {
        redirect("/");
      } else if ((await getaccessToken("SUPER_ADMIN")) === "authorized") {
        redirect("/admin/stock/order");
      } else {
        redirect("/");
      }
    }

    changeLoading(false);
  };
  useEffect(() => {
    checkAutorisation();
  }, [getaccessToken]);

  return (
    <section className="admin w-full overflow-hidden flex min-h-screen">
      <AdminNav navs={SUPER_ADMIN_NAV} />

      <div className="lg:ml-[260px] xl:ml-[280px] flex flex-col gap-8 py-8 w-full lg:w-[calc(100%-280px)] lx:w-[calc(100%-280px)]">
        <AdminHeader />

        <div className="w-full px-6 md:px-8">
          <hr className="bg-gray w-full" />
        </div>

        {children}
      </div>
    </section>
  );
}
