"use client";

import AdminHeader from "@/components/shared/headers/AdminHeader";
import AdminNav from "@/components/shared/navbars/AdminNav";
import { FC, ReactNode } from "react";

type AdminProps = {
  children: ReactNode;
};

const AdminLayout: FC<AdminProps> = ({ children }): JSX.Element => {
  return (
    <section className="admin w-full overflow-hidden flex min-h-screen">
      <AdminNav />

      <div className="lg:ml-[260px] xl:ml-[280px] flex flex-col gap-8 py-8 w-full lg:w-[calc(100%-280px)] lx:w-[calc(100%-280px)]">
        <AdminHeader />

        <div className="w-full px-6 md:px-8">
          <hr className="bg-gray w-full" />
        </div>

        {children}
      </div>
    </section>
  );
};

export default AdminLayout;
