import React, { useEffect, useRef } from "react";
import ResearchForm from "@/components/shared/forms/ResearchForm";
import Image from "next/image";
import gsap from "gsap";
import AnimatedElement from "@/components/shared/animations/AnimatedElements";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const letters = ref.current.querySelectorAll(".letters");
      const imageContainer = ref.current.querySelector(".image-container");

      gsap.fromTo(
        letters,
        { opacity: 0, height: 0, y: 350, scale: 1.5, rotate: -40 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          height: "auto",
          stagger: 0.18,
          duration: 0.6,
          ease: "circ.out",
          delay: 1,
        }
      );

      gsap.fromTo(
        imageContainer,
        {
          opacity: 0,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        },
        {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power1.inOut",
          delay: 1.5,
        }
      );
    }
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((letter, index) => (
      <span key={index} className="inline-block overflow-hidden">
        <span className="letters inline-block">{letter}</span>
        <span>&nbsp;</span>
      </span>
    ));
  };

  return (
    <section className="landing__hero w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-8 mt-[15vh] md:mt-[25vh]" ref={ref}>
      <div className="container mx-auto w-full flex justify-center items-center gap-16">
        <div className="shape-1 absolute -left-24 md:-left-28 hidden md:flex lg:-left-32 top-[7vh]">
          <img src="/icons/shape-1.svg" alt="shape-1" className="w-[270px] md:w-[320px] lg:w-auto" />
        </div>
        <div className="flex flex-col items-center gap-8 text-secondary relative z-30">
          <h1 className="text-[1.6em] md:text-[2.3em] dark:text-white lg:text-5xl 2xl:text-6xl inter-tight leading-tight text-center flex-wrap">
            <span className="font-bold">{splitText("Consommez malin,")}</span> <br />
            {splitText("soutenez nos")}
            <span className="text-primary-foreground italic"> {splitText("producteurs")}</span>
            {splitText(" locaux")}
          </h1>

          <AnimatedElement delay={1.4} from={{ opacity: 0, y: 120 }} to={{ opacity: 1, y: 0 }}>
            <p className="text-secondary-2 dark:text-darkGray text-center max-w-[750px] w-full">
              Une sélection unique de produits agricoles frais et authentiques,
              directement issus des coopératives locales. Soutenez une
              consommation responsable tout en savourant le meilleur de
              Madagascar.
            </p>
          </AnimatedElement>

          <ResearchForm />
          <div className="mt-12 flex flex-col items-center gap-5">
            <AnimatedElement delay={0.8} from={{ opacity: 0, scale: 1.6 }} to={{ opacity: 1, scale: 1 }}>
              <p className="text-secondary dark:text-white">Proposé par nos producteurs de</p>
            </AnimatedElement>

            <AnimatedElement delay={1.2} from={{ opacity: 0, scale: 1.6 }} to={{ opacity: 1, scale: 1 }}>
              <div className="flex gap-4 items-center">
                <Image
                  src={"/icons/logo.svg"}
                  width={112}
                  height={31}
                  alt="Logo of Fihary"
                  className="w-[92px]"
                />
                <Image
                  src={"/icons/logo.svg"}
                  width={112}
                  height={31}
                  alt="Logo of Fihary"
                  className="w-[92px]"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
        <div className="shape-2 absolute right-0 hidden md:flex">
          <img src="/icons/shape-2.svg" alt="shape-1" className="md:w-[200px] lg:w-auto" />
        </div>
      </div>
      <div className="shape-3 absolute left-[15vw] hidden md:flex">
        <img src="/icons/shape-3.svg" alt="shape-1" />
      </div>
    </section>
  );
};

export default Hero;
