<!--PiedDePage.vue,components / pied de page, examen 2-->
<!--Maud Harvey, 11 février 2021-->
<template>
  <div><h2 v-footerdirective="new Intl.DateTimeFormat('fr-Ca', { dateStyle: 'full'}).format()"></h2></div>
</template>

<script>
import footerdirective from '../directives/FooterDirective'

export default {
  name: 'pied-de-page',
  directives:footerdirective
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    
    height: 10vh;
    margin:auto;
    text-align: center;
    background-color: #D0E0F0;
    color: white;
  }

</style>
