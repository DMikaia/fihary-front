import { MarketOrder, MarketProduct } from "../type";

const MARKET_PRODUCT_MOCK: MarketProduct[] = [
  {
    name: "Vary",
    price: 3500,
    imgUrl: "/img/mockdata/market-product-1.png",
    unit: "kg",
  },
  {
    name: "Anandrano",
    price: 500,
    imgUrl: "/img/mockdata/market-product-2.png",
    unit: "botte",
  },
  {
    name: "Pastèque",
    price: 2500,
    imgUrl: "/img/mockdata/market-product-3.png",
    unit: "unité",
  },
  {
    name: "Carottes",
    price: 1500,
    imgUrl: "/img/mockdata/market-product-4.png",
    unit: "botte",
  },
  {
    name: "Betterave",
    price: 950,
    imgUrl: "/img/mockdata/market-product-5.png",
    unit: "unité",
  },
  {
    name: "Ananas",
    price: 1500,
    imgUrl: "/img/mockdata/market-product-6.png",
    unit: "unité",
  },
];

const MARKET_ORDER_MOCK: MarketOrder[] = [
  {
    name: "Anandrano",
    price: 500,
    imgUrl: "/img/mockdata/market-product-2.png",
    unit: "botte",
    quantity: 1,
  },
  {
    name: "Pastèque",
    price: 2500,
    imgUrl: "/img/mockdata/market-product-3.png",
    unit: "unité",
    quantity: 1,
  },
];

export { MARKET_PRODUCT_MOCK, MARKET_ORDER_MOCK };
