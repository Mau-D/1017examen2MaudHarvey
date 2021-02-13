<!--Examen2, interface utilisateur-->
<!--Maud Harvey, 11 février 2021-->

<template>
  <div id="app">
    <header>
      <en-tete></en-tete>
    </header>
    <main>
      <component :is="displayedComponent"></component>
      <!--<contact-formulaire></contact-formulaire>  -->
    </main>
    <footer>
      <pied-de-page></pied-de-page>
    </footer>
  </div>
</template>

<script>
import EnTete from './components/EnTete.vue'
import PageAccueil from './views/PageAccueil.vue'
import PiedDePage from './components/PiedDePage.vue'
import UserLogged from './views/UserLogged.vue'
//import ContactFormulaire from './views/ContactFormulaire.vue'


export default {
  name: 'App',
  data: function () {
    return {
      loggedIn: true,
      displayedComponent: ""
    }
  },
  components: {
    EnTete,
    PageAccueil,
    PiedDePage,
    UserLogged,
    //ContactFormulaire
  },
  //Fonction qui vérifie si un utilisateur est connecté
  //Selon la valeur booléenne de loggedIn le nom du composant à afficher est entré dans la variable displayedComponent
  //Avec une balise <component> et un v-bind:is, le composant est afficher au bon endroit
  created: function () {
    if(this.loggedIn){
      this.displayedComponent = "UserLogged"
    }else{
     this.displayedComponent = "PageAccueil"
    }
  }
}
</script>

<style>

</style>
