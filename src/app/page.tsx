"use client";

import About from "@/components/section/landing/About";
import LandingNav from "@/components/shared/navbars/LandingNav";

export default function Home() {
  return (
    <section className="landing bg-gray">
      <LandingNav />
      <About />
    </section>
  );
}
