"use client";

import ThemeSwitch from "@/components/theme-switch/ThemeSwitch";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen">
      <div className="container mx-auto w-full">
        <ThemeSwitch />
      </div>
    </main>
  );
}
