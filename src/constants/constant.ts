import {
  AccordionTypes,
  FooterLink,
  LandingNav,
  LoginSlider,
  MarketCategoryTypes,
} from "./type";

const LOGIN_SLIDERS: LoginSlider[] = [
  {
    title: "La plateforme dédiée aux produits agricoles",
    img: "bg-slider-1",
    description:
      "Achetez des produits agricoles de qualité sur une plateforme simple et fiable.",
  },
  {
    title: "Formations pour une agriculture moderne",
    img: "bg-slider-2",
    description:
      "Une plateforme dédiée à la formation des agriculteurs et des utilisateurs pour développer leurs compétences",
  },
];

const LANDING_NAV: LandingNav[] = [
  {
    label: "Accueil",
    url: "/",
  },
  {
    label: "Marketplace",
    url: "/market",
  },
  {
    label: "Formations",
    url: "/courses",
  },
];

const ACCORDION_DATA: AccordionTypes[] = [
  {
    question: "Qu'est-ce que Fihary ?",
    response:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Comment acheter des produits sur Fihary ?",
    response:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Qui sont les fournisseurs des produits ?",
    response:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Puis-je devenir partenaire de Fihary ?",
    response:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
];

const MARKET_CATEGORIES: MarketCategoryTypes[] = [
  {
    id: "fruits",
    label: "Fruits",
  },
  {
    id: "vegetables",
    label: "Légumes",
  },
  {
    id: "epices",
    label: "Epices",
  },
];

const FOOTER_LINKS: FooterLink[] = [
  {
    label: "Nos produits",
    href: "#market",
  },
  {
    label: "A propos",
    href: "#about",
  },
  {
    label: "Nos formations",
    href: "#course",
  },
  {
    label: "FAQ",
    href: "#qa",
  },
];

const FOOTER_OTHERS: FooterLink[] = [
  {
    label: "Conditions d'utilisation",
    href: "",
  },
  {
    label: "Mode nuit",
    href: "",
  },
];

const FOOTER_SOCIALS = [
  {
    name: "Facebook",
    img: "/icons/facebook.svg",
    url: "",
  },
  {
    name: "Instagram",
    img: "/icons/instagram.svg",
    url: "",
  },
  {
    name: "LinkedIn",
    img: "/icons/linkedin.svg",
    url: "",
  },
];

export {
  LANDING_NAV,
  LOGIN_SLIDERS,
  ACCORDION_DATA,
  MARKET_CATEGORIES,
  FOOTER_LINKS,
  FOOTER_OTHERS,
  FOOTER_SOCIALS,
};
