import {
  AccordionTypes,
  AdminNav,
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
    answer:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Comment acheter des produits sur Fihary ?",
    answer:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Qui sont les fournisseurs des produits ?",
    answer:
      "Fihary est une plateforme qui connecte les acheteurs aux produits agricoles locaux et propose des formations pour accompagner les agriculteurs et les coopératives.",
  },
  {
    question: "Puis-je devenir partenaire de Fihary ?",
    answer:
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

const ADMIN_NAV: AdminNav[] = [
  {
    label: "Dashboard",
    url: "/admin/dashboard",
    img: "/icons/dashboard.svg",
    imgActive: "/icons/dashboard-active.svg",
  },
  {
    label: "Commande",
    url: "/admin/order",
    img: "/icons/box.svg",
    imgActive: "/icons/box-active.svg",
  },
  {
    label: "Stock",
    url: "/admin/stock",
    img: "/icons/product.svg",
    imgActive: "/icons/product-active.svg",
  },
  {
    label: "Box de proximité",
    url: "/admin/box",
    img: "/icons/user.svg",
    imgActive: "/icons/user-active.svg",
  },
  {
    label: "Paramètres",
    url: "/admin/settings",
    img: "/icons/setting.svg",
    imgActive: "/icons/setting-active.svg",
  },
];

const NODE_BACK_URL = "http://192.168.8.187:3004/api";
const FLASK_BACK_URL = "http://localhost:5000";

export {
  LANDING_NAV,
  LOGIN_SLIDERS,
  ACCORDION_DATA,
  MARKET_CATEGORIES,
  FOOTER_LINKS,
  FOOTER_OTHERS,
  FOOTER_SOCIALS,
  ADMIN_NAV,
  NODE_BACK_URL,
  FLASK_BACK_URL,
};
