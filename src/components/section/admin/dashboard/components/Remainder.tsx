import Image from "next/image";

export default function Remainder() {
  return (
    <div className="flex flex-col gap-8">
      <h2>Alertes / Remainder</h2>

      <div className="w-full border shadow-sm border-[#C4C4C4] rounded-xl p-4">
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-full bg-gray">
            <Image
              src={"/icons/danger.svg"}
              width={18}
              height={18}
              alt="Danger icon"
            />
          </div>

          <div>
            <h1 className="inter-tight">Commandes non traitées</h1>
            <p className="text-sm text-secondary-2">
              3 commandes n'ont pas encore été expédiées. Dernière date de
              traitement : aujourd'hui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
