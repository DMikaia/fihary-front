export default function About() {
  return (
    <section className="landing__about w-full overflow-x-hidden px-6 md:px-12 lg:px-24 mt-24">
      <div className="container w-full flex flex-col gap-16 items-center">
        <div className="w-fit h-fit text-center flex flex-col gap-4">
          <p className="text-[#A1D83B] text-sm">A PROPOS</p>
          <h1 className="text-3xl max-w-[340px] inter-tight">
            <span className="font-bold text-secondary">Fihary : Une union pour</span> un
            avenir durable
          </h1>
        </div>

        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="flex flex-col gap-4 bg-white h-[192px] lg:h-[184px] justify-between p-8 rounded-xl shadow-sm">
            <h1 className="text-[#A1D83B] text-5xl font-bold">+250</h1>
            <p className="text-lg text-secondary">
              Familles d&apos;agriculteurs pour vous offrir des produits
              locaux, frais et responsables
            </p>
          </div>
          <div className="p-8 flex flex-col gap-4 bg-white rounded-xl h-[192px] lg:h-[184px] justify-between shadow-sm">
            <p className="text-lg text-secondary">Union de deux entités</p>
            <h1 className="text-[#A1D83B] text-5xl font-bold">+250</h1>
          </div>
          <div className="md:col-span-2 h-[240px] p-8 bg-white rounded-xl shadow-sm">
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
