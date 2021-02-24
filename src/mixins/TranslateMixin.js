//TranslateMixin.js, mixins
//Mixin pour traduire les libéllés du composant ContactFormulaire
//Maud Harvey, 15 février 2021
//Constante des valeurs des libellés selon la langue choisie
const TRANSLATIONS = {
  en: {
    title: "Information request",
    name: "Last name",
    firstname: "First name",
    email: "E-mail",
    category: "Category",
    question: "Write your question",
  },
  fr: {
    title: "Demande d'informations",
    name: "Nom",
    firstname: "Prénom",
    email: "Courriel",
    category: "Catégorie",
    question: "Écrire votre question",
  },
};
export const TranslateMixin = {
  //Définition des données pour le choix de la langue
  data() {
    return {
      languages: ["en", "fr"],
      languageChoosen: "fr",
    };
  },
  //Dans le composant ContactFormulaire.vue, lors de l'évènement clic sur le bouton du choix de la langue, cette méthode est appelée
  methods: {
    toggleLanguage: function(e) {
      this.languageChoosen = e;
      console.log("method " + this.languageChoosen);
    },
  },
  //Filtre appliqué à chacuns des libellés dans le composant ContactFormulaire.vue
  //Les paramètres de la langue choisie (lang) et la valeur du libellé (value) sont associé à la valeur de la constante TRANSLATIONS
  filters: {
    languageFilter: function(value, lang) {
      if (lang === "fr") {
        if (value === "title") {
          return TRANSLATIONS.fr.title;
        }
        if (value === "name") {
          return TRANSLATIONS.fr.name;
        }
        if (value === "firstname") {
          return TRANSLATIONS.fr.firstname;
        }
        if (value === "email") {
          return TRANSLATIONS.fr.email;
        }
        if (value === "category") {
          return TRANSLATIONS.fr.category;
        }
        if (value === "question") {
          return TRANSLATIONS.fr.question;
        }
      } else if (lang === "en") {
        if (value === "title") {
          return TRANSLATIONS.en.title;
        }
        if (value === "name") {
          return TRANSLATIONS.en.name;
        }
        if (value === "firstname") {
          return TRANSLATIONS.en.firstname;
        }
        if (value === "email") {
          return TRANSLATIONS.en.email;
        }
        if (value === "category") {
          return TRANSLATIONS.en.category;
        }
        if (value === "question") {
          return TRANSLATIONS.en.question;
        }
      }
    },
  },
};
