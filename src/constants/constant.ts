import { LandingNav, LoginSlider } from "./type";

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

export { loginSliders, landingNav };
