import ResearchForm from "@/components/shared/forms/ResearchForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="landing__hero w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-8 mt-[15vh] md:mt-[25vh]">
      <div className="container mx-auto w-full flex justify-center items-center gap-16">
        <div className="shape-1 absolute -left-32 top-[7vh]">
          <img src="/icons/shape-1.svg" alt="shape-1" />
        </div>
        <div className="flex flex-col items-center gap-8 text-secondary">
          <h1 className="text-[1.6em] md:text-5xl 2xl:text-6xl inter-tight leading-tight text-center flex-wrap">
            <span className="font-bold">Consommez malin,</span> <br />soutenez nos
            <span className="text-[#A1D83B]"> producteurs</span> locaux
          </h1>

          <p className="text-secondary/70 text-center max-w-[750px] w-full">
            Une sélection unique de produits agricoles frais et authentiques,
            directement issus des coopératives locales. Soutenez une
            consommation responsable tout en savourant le meilleur de
            Madagascar.
          </p>

          <ResearchForm />
          <div className="mt-12 flex flex-col items-center gap-5">
            <p>Proposé par nos producteurs de</p>

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
          </div>
        </div>
        <div className="shape-2 absolute right-0">
          <img src="/icons/shape-2.svg" alt="shape-1" />
        </div>
      </div>
      <div className="shape-3 absolute left-[15vw]">
        <img src="/icons/shape-3.svg" alt="shape-1" />
      </div>
    </section>
  );
}
