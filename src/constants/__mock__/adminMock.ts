import { OrderTypes } from "../type";

const generalStatistics = {
  orders: 250,
  activeBox: 78,
  sells: 784,
};

const OrderInProgressMock: OrderTypes[] = [
  {
    status: "En attente",
    order_ticket: "#FE6487",
    orderItem: [
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Riz Manalalondo",
        img_url: "/img/mockdata/market-product-1.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
    ],
  },
  {
    status: "En attente",
    order_ticket: "#DE8745",
    orderItem: [
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Riz Manalalondo",
        img_url: "/img/mockdata/market-product-1.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
    ],
  },
  {
    status: "Refusé",
    order_ticket: "#FE64FE",
    orderItem: [
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Riz Manalalondo",
        img_url: "/img/mockdata/market-product-1.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
    ],
  },
  {
    status: "Refusé",
    order_ticket: " #FE64FE",
    orderItem: [
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Riz Manalalondo",
        img_url: "/img/mockdata/market-product-1.png",
        unity: "Kg",
      },
      {
        quantity: 50,
        name: "Ananandrano",
        img_url: "/img/mockdata/market-product-2.png",
        unity: "Kg",
      },
    ],
  },
];

export { generalStatistics, OrderInProgressMock };
