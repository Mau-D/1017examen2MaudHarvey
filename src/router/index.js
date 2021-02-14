import Vue from "vue";
import VueRouter from "vue-router";
import PageAccueil from "../views/PageAccueil.vue";
import UserLogged from "../views/UserLogged.vue";
import ProjetsListe from "../views/ProjetsListe.vue";
import ContactFormulaire from "../views/ContactFormulaire.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: PageAccueil,
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: UserLogged,
  },
  {
    path: "/projets",
    name: "Projets",
    component: ProjetsListe,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactFormulaire,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
