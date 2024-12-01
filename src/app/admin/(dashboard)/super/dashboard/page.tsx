"use client";

import DashboardLeft from "@/components/section/admin/dashboard/DashboardLeft";
import DashboardRight from "@/components/section/admin/dashboard/DashboardRight";

export default function Admin() {
  return (
    <section className="admin__dashboard px-6 md:px-8 w-full flex flex-col lg:flex-row gap-8">
      <DashboardLeft />
      <DashboardRight />
    </section>
  );
}
