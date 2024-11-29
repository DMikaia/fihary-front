"use client";

import FAQ from "@/components/section/landing/FAQ";
import Formations from "@/components/section/landing/Formations";
import Products from "@/components/section/landing/Products";
import LandingNav from "@/components/shared/navbars/LandingNav";
import Footer from "@/components/section/landing/Footer";
import About from "@/components/section/landing/About";
import Hero from "@/components/section/landing/Hero";

export default function Home() {
  return (
    <section className="landing w-full min-h-screen bg-gray">
      <LandingNav />
      <Hero />
      <Products />
      <About />
      <Formations />
      <FAQ />
      <Footer />
    </section>
  );
}
