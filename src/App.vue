<!--Examen2, interface utilisateur-->
<!--Maud Harvey, 11 février 2021-->

<template>
  <div id="app">
    <header>
      <en-tete></en-tete>
    </header>
    <main>
      <page-accueil></page-accueil>
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

export default {
  name: 'App',
  components: {
    EnTete,
    PageAccueil,
    PiedDePage
  }
}
</script>

<style>

</style>
