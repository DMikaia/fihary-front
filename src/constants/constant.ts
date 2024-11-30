import {
  AccordionTypes,
  LandingNav,
  LoginSlider,
  MarketCategoryTypes,
} from "./type";

const loginSliders: LoginSlider[] = [
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

const landingNav: LandingNav[] = [
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

export { loginSliders, landingNav, ACCORDION_DATA, MARKET_CATEGORIES };
