import AnimatedElement from "@/components/shared/animations/AnimatedElements";
import SplitText from "@/components/shared/animations/SplitText";
import TextSmooth from "@/components/shared/animations/TextSmooth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

const Formations: FC = (): JSX.Element => {
  return (
    <section className="landing__formations w-full overflow-hidden mt-28 px-6 md:px-24 lg:px-48 bg-primary py-10">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <AnimatedElement
            duration={0.46}
            delay={0.6}
            from={{ opacity: 0, y: -90 }}
            to={{ opacity: 1, y: 0 }}
          >
            <p className="text-primary-foreground">NOS PRODUITS</p>
          </AnimatedElement>
          <TextSmooth
            duration={0.13}
            container=".landing__about"
            delay={0.03}
            color="#ffffff"
          >
            <h2 className="text-2xl md:text-3xl inter-tight max-w-[300px] mt-3 md:mt-4">
              <SplitText
                text="Notre sélection de formation"
                classn="letters-text-smooth"
              />
            </h2>
          </TextSmooth>
        </div>
        <AnimatedElement
          duration={0.46}
          delay={0.6}
          from={{ opacity: 0, scale: 0 }}
          to={{ opacity: 1, scale: 1 }}
        >
          <Button
            variant="ghost"
            className="text-white w-max hover:bg-transparent  hover:text-white/80"
          >
            Afficher plus
            <Image
              alt="arrow-up-svg"
              height={23}
              width={23}
              src="/icons/arrow-up-2.svg"
            />
          </Button>
        </AnimatedElement>
      </header>
      <div className="formations-preview mt-14">
        <div className="video-preview h-[280px] md:h-[350px] rounded-lg bg-gray-400 bg-[url('/img/video-cover.jpg')] bg-cover bg-center"></div>
        <p className="text-white mt-4 max-w-[750px]">
          Apprenez à gérer vos cultures de manière éco-responsable en utilisant
          des techniques agricoles durables qui respectent l’environnement et
          augmentent la rentabilité.
        </p>
      </div>
    </section>
  );
};

export default Formations;
