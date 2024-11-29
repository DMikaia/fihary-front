"use client";

import LandingNav from "@/components/shared/navbars/LandingNav";
import About from "@/components/section/landing/About";
import Hero from "@/components/section/landing/Hero";

export default function Home() {
  return (
    <section className="landing w-full min-h-screen">
      <LandingNav />
      <Hero />
      <About />
    </section>
  );
}
