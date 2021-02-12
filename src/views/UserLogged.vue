<!--UserLogged.vue,views / Page d'un utilisateur connecté, examen 2-->
<!--Maud Harvey, 12 février 2021-->
<template>
<div>
    <h1>Maud Harvey</h1>
    <div id="logged">
        <!-- Profil de l'utilisateur -->
        <div class="flex">
            <h1>Votre profil</h1>
            <h4>Développeur Front-End Junior</h4>
            <h3>Région du Saguenay-Lac-St-Jean</h3>
            <h2>Travailleur autonome, pigiste</h2>
        </div>
        <!-- Langages de programmation -->
        <div class="flex">
            <h1>Langages de programmation</h1>
            <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Javascript</li>
            </ul>
        </div>
        <!-- Formations -->
        <div class="flex">
            <h1>Formations</h1>
            <h3>Attestation d'études collégiales en développement Front-End</h3>
            <h2>Cégep de Trois-Rivières</h2>
            
        </div>
        <!-- Contact -->
        <div class="flex">
            <h1>Contact</h1>
            <h3>Maud Harvey</h3>
            <h2>harveymaud@gmail.com</h2>
        </div>
        <!-- Expériences -->
        <div class="flex">
            <h1>Expériences professionnelles</h1>
            <table>
                <thead>
                    <tr>
                        <th>Années</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2006-2019</td>
                        <td>Technicienne en travaux pratiques</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'user-logged',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
