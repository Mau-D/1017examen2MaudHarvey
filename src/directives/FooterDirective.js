//FooterDirective.js, directives
//Afficher le copyright et la date
//Maud Harvey, 15 février 2021
import Vue from "vue";

Vue.directive("footerdirective", {
  bind(el, binding) {
    console.log("hello");
    el.innerHTML = `Copyright Maud Harvey,  ` + binding.value;
  },
});
