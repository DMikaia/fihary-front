"use client";

import FAQ from "@/components/section/landing/FAQ";
import Formations from "@/components/section/landing/Formations";
import Products from "@/components/section/landing/Products";
import LandingNav from "@/components/shared/navbars/LandingNav";

export default function Home() {
  return (
    <section className="landing bg-gray">
      <LandingNav />
      <Products />
      <Formations />
      <FAQ />
    </section>
  );
}
