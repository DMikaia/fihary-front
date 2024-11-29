import ResearchForm from "@/components/shared/forms/ResearchForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="landing__hero w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-8 mt-[12vh]">
      <div className="container w-full flex justify-between items-center gap-16 px-8">
        <div className="landing__left flex flex-col gap-8 max-w-[500px] 2xl:max-w-[600px] text-secondary">
          <h1 className="text-5xl 2xl:text-6xl inter-tight leading-tight">
            <span className="font-bold">Consommez malin,</span> soutenez nos
            <span className="text-[#A1D83B]"> producteurs</span> locaux
          </h1>

          <p className="text-secondary/70">
            Une sélection unique de produits agricoles frais et authentiques,
            directement issus des coopératives locales. Soutenez une
            consommation responsable tout en savourant le meilleur de
            Madagascar.
          </p>

          <ResearchForm />

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

        <div className="w-[400px] h-[480px] relative flex justify-center items-end flex-1">
          <div className="bg-[#D9D9D9] rounded-lg h-[400px] w-full"></div>

        </div>
      </div>
    </section>
  );
}
