<!--ProjetsListe.vue,views / Liste des projets, examen 2-->
<!--Maud Harvey, 12 février 2021-->
<template>
    <div id="projets">
        <ul>
            <li v-for="projet in projets" :key="projet.id">
                <div>
                    <h1>{{projet.nom}}</h1>
                    <h3>{{projet.cours}}</h3>
                </div>
                <div class="enligne">
                    <img :src="projet.image" :title="projet.nom" :alt="projet.nom">
                </div> 
                <div class="enligne">
                    <p>{{projet.description}}</p>
                </div>
                              
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'projets-liste',
  data: function () {
    return {
      projets:[
          {
              id: 1,
              nom: "Intégration d'un premier site en bootstrap responsive",
              cours: "Techniques d'intégration des interfaces WEB 1",
              description:"Ce projet, en sujet libre, de trois pages contient 4 sections responsives en utilisant bootstrap, les medias queries et les polices inclusives (REM). Ce projet comprend plusieurs éléments, tel que des bannières, un formulaire, une section jumbotron, une card, un modal avec carousel et des sections en parallax.",
              image: require("../assets/img/Integration1_final.jpg")
          },
           {
              id: 2,
              nom: "Photociti en JQuery",
              cours: "Techniques de programmation WEB 1",
              description:"Ce projet reproduit le site ''http://www.photociti.ca/'' en utilisant JQuery, il comprend trois parties: le choix du mot, le choix des lettres et le choix du fond. Pour le choix du mot, les erreurs de longueur, les accents et les caractères spéciaux sont gérés. Pour le choix des lettres, un carousel Bootstrap permet de changer l'image. Pour le choix du fond, l'usager sélectionne la couleur et l'étape 4 offre l'impression du cadre seulement.",
              image: require("../assets/img/prog1_final.jpg")
          },
          {
              id: 3,
              nom: "Spotify québécois en REACT",
              cours: "Techniques de programmation WEB 2",
              description:"Ce projet affiche un catalogue d'album, avec une page de connexion. Une barre de recherche sélectionne les albums par leur nom ou celui de l'artiste. Un clic sur l'album amène à la liste des chansons et celui sur une chanson à ses paroles.",
              image:require("../assets/img/prog2_tp1.jpg")
          },
          {
              id: 4,
              nom: "Gestionnaire de nouvelles",
              cours: "Infrastructure WEB",
              description:"Ce projet par la gestion de nouvelles démontre la capacité à manipuler une base de données avec le langage PHP. Les categories sont affichés dans le menu, les nouvelles récentes sont affichées sur la page d'accueil. L'affichage par catégorie des nouvelles est accessible par le menu et l'affichage d'une nouvelle détaillée par un lien. Les opérations CRUD sont diponibles par la connexion qui donne accès au menu d'administration. Des ajouts pour la sécurité sont ajoutés et le déploiement est effectué.",
              image:require("../assets/img/infrastructure_final.jpg")
          },
          {
              id: 5,
              nom: "La trotteuse en REACT",
              cours: "Techniques de programmation WEB 2",
              description:"Ce projet, en sujet libre, est un site qui comporte les exigences d'une PWA. L'intégration est fait en SASS et comporte des animations de librairies JavaScript. Une API web est utilisé avec le service ''https://crudcrud.com/'', car des formulaires d'ajout et d'édition sont accessibles par un bouton ou de lien sur les titres. Ce projet est programmé avec des composants utilisant soit des classes ou des hooks.",
              image:require("../assets/img/prog2_final.jpg")
          },
      ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #projets{
        background-image: url("../assets/img/profil.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-color: blue;
        background-size: cover;
    }
    ul, li{
        text-align: center;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 5%;
        margin: 5%;
        border: 2px solid #1A8FD5;
    }
    h1{
        text-align: center;
        color: #1A8FD5;
    }
    ul{
        list-style-type: none; 
    }
    
    img{
        width: 100%;
    }
    p{
        text-align: left;
        font-size: 1.2rem;
        height: 100%;
        
    }
    .enligne{
        height: 100%;
        width: 40%;
        display: inline-block;
        padding: 2%;
    }

</style>
