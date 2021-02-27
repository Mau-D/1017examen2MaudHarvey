//FooterDirective.js, directives
//Directive pour l'affichage du contenu dans le pied de page
//Afficher le copyright et la date
//Maud Harvey, 15 février 2021
import Vue from "vue";
//La directive est utilisé dans le composant PiedDePage.vue

Vue.directive("footerdirective", {
  bind(el, binding) {
    el.innerHTML = `Copyright (c) ` + binding.value + ` Maud Harvey`;
  },
});
//Le paramètre el.innerHTML, permet d'insérer la valeur dans le html
//Le paramètre binding reçoit une valeur, définit dans l'appel de la directive
