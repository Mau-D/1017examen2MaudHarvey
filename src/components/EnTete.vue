<!--EnTete.vue,components / menu de navigation, examen 2-->
<!--Maud Harvey, 11 février 2021-->
<template>
    <div id="nav">
      <router-link v-for="link in menu" :to="link.path" :key="link.titre">{{link.titre}}</router-link> 
    </div>
    <!-- remplacer par :to, pour avoir le menu dynamique avec v-for -->
</template>
<script>
    export default {
      name: "en-tete",
      data: function () {
        return {
          menu:[
            {
              titre:"Accueil",
              path:"/"
            },
            {
              titre:"Contact",
              path:"/contact"
            },
            {
              titre:"Projets",
              path:"/projets"
            },
            {
              titre:"Connexion",
              path:"/connexion"
            }
          ]
        };
      }
    }
</script>
<!-- Ajouter l'attribut "scoped"  pour limiter le CSS à ce composant seulement -->
<style scoped>
#nav {
  padding: 30px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #D0E0F0;
}
#nav a{
  font-weight: bold;
  color: #7AAC9F;
  padding: 2%;
}

#nav a.router-link-exact-active {
  color: #1A8FD5;
}
</style>




