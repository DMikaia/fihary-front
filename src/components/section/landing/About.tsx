"use client"

import AnimatedElement from "@/components/shared/animations/AnimatedElements";
import NumberIncrement from "@/components/shared/animations/NumberIncrement";
import { useState } from "react";

export default function About() {
  const [hoveredCard1, setHoveredCard1] = useState<boolean>(false);
  const [hoveredCard2, setHoveredCard2] = useState<boolean>(false);
  const [hoveredCard3, setHoveredCard3] = useState<boolean>(false);
  return (
    <section className="landing__about w-full overflow-x-hidden px-6 md:px-12 lg:px-24 mt-24">
      <div className="container w-full flex flex-col gap-16 items-center">
        <div className="w-fit h-fit text-center flex flex-col gap-4">
          <AnimatedElement duration={0.46} delay={0.3} from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }}><p className="text-primary-foreground text-sm">A PROPOS</p></AnimatedElement>
          <AnimatedElement duration={0.46} delay={0.6} from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }}>
            <h1 className="text-2xl md:text-3xl max-w-[340px] inter-tight">
              <span className="font-bold text-secondary">Fihary : Une union pour</span> un
              avenir durable
            </h1>
          </AnimatedElement>
        </div>

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className={`cursor-pointer flex flex-col gap-4 transition-all duration-100 ${hoveredCard1 ? "bg-primary-foreground" : "bg-white"} h-[192px] lg:h-[184px] justify-between p-8 rounded-xl shadow-sm`} onMouseEnter={() => setHoveredCard1(true)} onMouseLeave={() => setHoveredCard1(false)}>
            <h1 className={`${hoveredCard1 ? "text-white" : "text-primary-foreground"} text-4xl lg:text-5xl font-bold`}>+<NumberIncrement start={0} end={250} duration={0.7} delay={1.5} /></h1>
            <AnimatedElement duration={0.46} delay={0.3} from={{ opacity: 0, scale: 0 }} to={{ opacity: 1, scale: 1 }}><p className="text-lg text-secondary">
              Familles d&apos;agriculteurs pour vous offrir des produits
              locaux, frais et responsables
            </p></AnimatedElement>
          </div>
          <div className={`cursor-pointer p-8 flex flex-col gap-4 ${hoveredCard2 ? "bg-primary-foreground" : "bg-white"} rounded-xl h-[192px] lg:h-[184px] justify-between shadow-sm`} onMouseEnter={() => setHoveredCard2(true)} onMouseLeave={() => setHoveredCard2(false)}>
            <p className="text-lg text-secondary">Union de deux entités</p>
            <h1 className={`${hoveredCard2 ? "text-white" : "text-primary-foreground"} text-4xl lg:text-5xl font-bold`}>+<NumberIncrement start={0} end={250} duration={0.7} delay={1.5} /></h1>
          </div>
          <div className={`${hoveredCard3 ? "bg-primary-foreground" : "bg-white"} cursor-pointer md:col-span-2 h-[240px] p-8 rounded-xl shadow-sm`} onMouseEnter={() => setHoveredCard3(true)} onMouseLeave={() => setHoveredCard3(false)}>
            <div className="h-full flex flex-col justify-center gap-4 max-w-[320px]">
              <h1 className="text-secondary text-2xl font-bold leading-tight">
                Des produits frais à un prix raisonnable
              </h1>
              <p className="text-secondary-2">
                Des produits locaux de qualité, accessibles à tous, tout en
                soutenant nos agriculteurs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
