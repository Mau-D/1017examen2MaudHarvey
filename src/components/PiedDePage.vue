<!--PiedDePage.vue,components / pied de page, examen 2-->
<!--Maud Harvey, 11 février 2021-->

<template>
<!-- Une valeur de date est envoyé à la directive pour l'affichage du pied de page -->
  <div><router-link :to="'/license'" v-footerdirective="2021"></router-link></div>
</template>

<script>
import footerdirective from '../directives/FooterDirective'

export default {
  name: 'pied-de-page',
  
  directives:footerdirective,
}
</script>

<!-- Ajouter l'attribut "scoped"  pour limiter le CSS à ce composant seulement -->
<style scoped>
  div{
    height: 10vh;
    margin:auto;
    text-align: center;
    background-color: #D0E0F0;
    color: white;
   
  }
</style>
