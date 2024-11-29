type LandingProductTypes = {
  img: string;
  title: string;
  price: number;
  price_type: string;
};

type AccordionTypes = {
  question: string;
  response: string;
  index?: number;
  className?: string;
};

export type { LandingProductTypes, AccordionTypes };
