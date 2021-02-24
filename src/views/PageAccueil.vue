<!--PageAccueil.vue,views / page d'accueil (Home), examen 2-->
<!--Maud Harvey, 11 février 2021-->

<template>
    <div id="pageAccueil">
        <div id="banniere">
            <div class="centre">
                <h1>Regroupement de Dévelloppeur Front-End</h1>
                <p>L’objectif général de l’AEC Développement Web vise à former des développeurs
                    « Front-end » aptes à programmer des applications Web « responsive », destinées 
                    aux utilisateurs de nouvelles technologies telles que les montres intelligentes, 
                    les tablettes, les téléphones intelligents, le commerce électronique, les objets 
                    connectés, les interfaces riches, l’intelligence artificielle, etc. Ces technologies 
                    génèrent de nouveaux procédés et nécessitent une main-d’œuvre spécialisée et polyvalente.
                </p>
                <p>
                    À la fin de son programme d’études, l’étudiant sera en mesure de procéder à 
                    l’intégration des interfaces, programmer des interactions, coder pour le Web et 
                    communiquer avec les services Web. Les principaux langages et « frameworks » enseignés dans le cadre de ce programme sont : HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, JQUERY, ANGULAR, REACT et VUE.JS.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'page-accueil',
}
</script>

<!-- Ajouter l'attribut "scoped"  pour limiter le CSS à ce composant seulement -->
<style scoped>
    #banniere{
        background-image: url("../assets/banniere.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-color: blue;
        background-size: cover;
        min-height: 80vh;
        padding: 10%;
    }
    .centre{
        text-align: center;
        margin: 20vh auto;
        width: 60%;
    }
    h1{
        text-align: center;
        padding: 0;
        margin: 0;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 5%;
    }
    p{
        text-align: justify;
        font-size: 1.4rem;
        padding: 0;
        margin: 0;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 5%;
    }
</style>
