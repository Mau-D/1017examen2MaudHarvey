<!--UserLogged.vue,views / Page d'un utilisateur connecté, examen 2-->
<!--Maud Harvey, 12 février 2021-->
<template>
    <div>
        <h1>{{informations.contact.nom}}</h1>
        <div id="logged">
            <!-- Profil de l'utilisateur -->
            <div class="flex">
                <h1>Votre profil</h1>
                <h2>{{informations.profil.titre}}</h2>
                <h3>{{informations.profil.region}}</h3>
                <h2>{{informations.profil.emploi}}</h2>
            </div>
            <!-- Langages de programmation -->
            <div class="flex">
                <h1>Langages de programmation</h1>
                <ul>
                    <li v-for="langage in informations.langages" :key="langage">{{langage}}</li>
                </ul>
            </div>
            <!-- Formations -->
            <div class="flex">
                <h1>Formations</h1>
                <div v-for="formation in informations.formations" :key="formation.diplome">
                    <h2>{{formation.diplome}}</h2>
                    <h4>{{formation.etablissement}}</h4>
                </div>
            </div>
            <!-- Contact -->
            <div class="flex">
                <h1>Contact</h1>
                <h3>{{informations.contact.nom}}</h3>
                <h2>{{informations.contact.courriel}}</h2>
            </div>
            <!-- Expériences -->
            <div class="flex">
                <h1>Expériences professionnelles</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Années</th>
                            <th>Description</th>
                            <th>Employeur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="experience in informations.experiences" :key="experience.annee">
                            <td>{{experience.annee}}</td>
                            <td>{{experience.description}}</td>
                            <td>{{experience.employeur}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Pour l'ajout des projets au besoin -->
        <!-- <div class="projets">
                <projets-liste></projets-liste>
            </div>  -->
        </div>  
    </div>
</template>

<script>
//Pour l'ajout des projets au besoin import ProjetsListe from './ProjetsListe.vue'
export default {
    //components: { ProjetsListe },
    name: 'user-logged',
    data: function () {
        //Objet pour les différentes informations de l'utilisateur connecté
        return {
            informations:{
                id:"user1",
                profil:{
                    titre:"Développeur Front-End Junior",
                    region:"Région du Saguenay-Lac-St-Jean",
                    emploi:"Travailleur autonome, pigiste"
                },
                langages:["HTML5", "CSS3", "Javascript"],
                formations:[
                    {
                    diplome:"Attestation d'études collégiales en développement Front-End",
                    etablissement:"Cégep de Trois-Rivières"
                    },
                    {
                    diplome:"Diplôme collégial en technologie physique",
                    etablissement:"Cégep André-Laurendeau"
                    }
                    ],
                    contact:{
                        nom:"Maud Harvey",
                        courriel:"harveymaud@gmail.com"
                    },
                experiences:[
                    {
                        annee:"2006-2019",
                        description:"Technicienne en travaux pratiques",
                        employeur:"Commission scolaire de l'Énergie"
                    },
                        {
                        annee:"2004-2006",
                        description:"Technicienne en travaux pratiques",
                        employeur:"Cégep André-Laurendeau"
                    }
                ]
            }
            
        }
    }
}
</script>

<!-- Ajouter l'attribut "scoped"  pour limiter le CSS à ce composant seulement -->
<style scoped>
    table{
        border-spacing: 2rem;
    }
    h1{
        text-align: center;
        color: #1A8FD5;
    }
    #logged{
        text-align: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: space-around;
        background-image: url(../assets/img/profil.jpg);
        background-size: cover;
        background-color: #1A8FD5;
    }
    .flex{
        flex-grow: 1;
        flex-basis: auto;
        align-self: auto;
        border: 2px solid #1A8FD5;
        margin: 2%;
        background-color: rgba(255, 255, 255, 0.9);

    }
    ul{
        list-style-type: none; 
    }
    table{
        margin: auto;
    }
    .projets{
        width: 100%;
        border: 2px solid #1A8FD5;
        margin: 2%;
        background-color: rgba(255, 255, 255, 0.9);
    }

</style>
