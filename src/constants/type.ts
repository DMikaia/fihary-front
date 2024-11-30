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
  response: string;
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
};
