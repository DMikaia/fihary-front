import { GeneralStatistics, Notification } from "../type";

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

export { GERNERAL_STAT, ADMIN_NOTIFICATIONS };
