"use client";

import LandingNav from "@/components/shared/navbars/LandingNav";
import Hero from "@/components/section/landing/Hero";

export default function Home() {
  return (
    <section className="landing">
      <LandingNav />
      <Hero />
    </section>
  );
}
