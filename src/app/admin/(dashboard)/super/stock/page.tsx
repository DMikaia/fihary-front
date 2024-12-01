import StockAction from "@/components/section/admin/stock/components/StockAction";
import { STOCK_MOCK_DATA } from "@/constants/__mock__/adminMock";
import StockCard from "@/components/shared/cards/StockCard";

export default function Stock() {
  return (
    <section className="admin__stock px-6 md:px-8 w-full mt-4 flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-primary-foreground font-bold">
            Produits en stock
          </h1>
          <p className="inter-tight">256 Produits trouvés</p>
        </div>

        <StockAction />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {STOCK_MOCK_DATA.map((item, id) => (
          <StockCard
            key={id}
            id={id}
            name={item.name}
            description={item.description}
            img={item.img}
            quantity={item.quantity}
            unit={item.unit}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
