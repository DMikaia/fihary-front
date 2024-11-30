import { GeneralStatistics, Notification, OrderTypes } from "../type";

const GERNERAL_STAT: GeneralStatistics = {
  orders: 250,
  activeBox: 78,
  sells: 784,
};

const ADMIN_NOTIFICATIONS: Notification[] = [
  {
    title: "Nouvelles ventes",
    description: "🚀 Nouveau record ! Vous avez réalisé 50 ventes aujourd'hui",
    type: "good",
  },
  {
    title: "Produits en rupture de stock",
    description: "Stock critique pour 'Tomates bio'. Restant : 5 unités.",
    type: "bad",
  },
  {
    title: "Croissance des utilisateurs 🎉",
    description: "10 nouveaux utilisateurs inscrits cette semaine",
    type: "neutral",
  },
];

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

const STOCK_MOCK_DATA = [
  {
    name: "Carrotes",
    description: "EL carote",
    img: "/img/mockdata/market-product-4.png",
    quantity: 35,
    price: 1500,
    unit: "kg",
  },
  {
    name: "Vary manalalondo",
    description: "Riz rouge",
    img: "/img/mockdata/market-product-1.png",
    quantity: 2500,
    price: 3500,
    unit: "kg",
  },
];

export {
  GERNERAL_STAT,
  ADMIN_NOTIFICATIONS,
  OrderInProgressMock,
  STOCK_MOCK_DATA,
};
