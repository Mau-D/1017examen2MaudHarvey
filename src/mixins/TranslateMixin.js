//TranslateMixin.js, mixins
//Mixin pour traduire les libéllés du composant ContactFormulaire
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
  data() {
    return {
      languages: ["en", "fr"],
      languageChoosen: "fr",
    };
  },

  methods: {
    toggleLanguage: function(e) {
      this.languageChoosen = e;
      console.log("method " + this.languageChoosen);
    },
  },

  filters: {
    //On pourrait ajouter une validation avec un if pour vérifier que l'élément value est bien une date
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
