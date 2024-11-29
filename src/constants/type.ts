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

export type { LandingNav, LoginSlider, AccordionTypes };
