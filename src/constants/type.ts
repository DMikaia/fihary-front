type LoginSlider = {
  title: string;
  img: string;
  description: string;
};

type LandingNav = {
  label: string;
  url: string;
};

type AccordionTypes = {
  question: string;
  answer: string;
  index?: number;
  className?: string;
};

type LandingProductTypes = {
  img: string;
  price: number;
  price_type: string;
  title: string;
};

type MarketCategoryTypes = {
  label: string;
  id: string;
};

interface MarketProduct {
  name: string;
  imgUrl: string;
  price: number;
  unit: string;
}

interface MarketOrder {
  name: string;
  imgUrl: string;
  price: number;
  unit: string;
  quantity: number;
}

type FooterLink = {
  label: string;
  href: string;
};

type AdminNav = {
  label: string;
  url: string;
  img: string;
  imgActive: string;
};

interface GeneralStatistics {
  orders: number;
  activeBox: number;
  sells: number;
}

type Notification = {
  title: string;
  description: string;
  type: "good" | "bad" | "neutral";
};

interface OrderTypes {
  total_amout?: number;
  status: string;
  created_at?: string;
  order_ticket?: string;
  orderItem: OrderItemTypes[];
}

interface OrderItemTypes {
  quantity: number;
  total_price?: string;
  name: string;
  created_at?: string;
  img_url: string;
  unity: string;
}

interface Response<T> {
  status: 200 | 400 | 500 | 401;
  message?: string;
  rest?: T;
}

interface Stock {
  name: string;
  description: string;
  img: string;
  quantity: number;
  price: number;
  unit: string;
}

type Box = {
  id: string;
  location: string;
  login: string;
  phone: string;
};

interface Response<T> {
  status: 200 | 400 | 401 | 500;
  message?: string;
  data?: T;
}

interface Token {
  stockId?: number;
  role: string;
}

export type {
  LandingNav,
  LoginSlider,
  AccordionTypes,
  LandingProductTypes,
  MarketCategoryTypes,
  MarketProduct,
  MarketOrder,
  FooterLink,
  AdminNav,
  GeneralStatistics,
  Notification,
  OrderTypes,
  Stock,
  Box,
  Response,
  Token,
};
