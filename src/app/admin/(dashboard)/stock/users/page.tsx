import { BOX_MOCK_DATA } from "@/constants/__mock__/adminMock";
import StatCard from "@/components/shared/cards/StatCard";
import BoxCard from "@/components/shared/cards/BoxCard";

export default function Users() {
  return (
    <section className="admin__box px-6 md:px-8 w-full mt-4 flex flex-col gap-8">
      <div className="grid gap-8 w-full md:w-1/2 grid-cols-2">
        <StatCard
          id={1}
          data={127}
          title="Total box"
          icon="/icons/shop-blue.svg"
          className="bg-[#1976D226]"
        />
        <StatCard
          id={2}
          data={112}
          title="Box actif"
          icon="/icons/shop-green.svg"
          className="bg-[#A1D83B26]"
        />
      </div>

      <div className="flex flex-col gap-8">
        <p className="inter-tight">Box de proximité disponibles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOX_MOCK_DATA.map((item, id) => (
            <BoxCard
              key={id}
              id={item.id}
              location={item.location}
              login={item.login}
              phone={item.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
