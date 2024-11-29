import ResearchForm from "@/components/shared/forms/ResearchForm";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="landing__hero w-full overflow-x-hidden px-6 md:px-24 py-8">
      <div className="container w-full flex justify-between items-center gap-16 px-8">
        <div className="landing__left flex flex-col gap-8 w-1/2 text-secondary">
          <h1 className="text-5xl">
            <span className="font-bold">Consommez malin,</span> soutenez nos
            producteurs locaux
          </h1>

          <p>
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

        <div className="w-[400px] h-[480px] relative flex justify-center items-end">
          <div className="bg-[#D9D9D9] rounded-lg h-[400px] w-full"></div>
          {/* <div className="h-[280px] w-[264px] absolute top-0 -right-[12.5%] bg-[#A1D83B] rounded-lg"></div> */}
        </div>
      </div>
    </section>
  );
}
