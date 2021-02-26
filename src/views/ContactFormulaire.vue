<!--ContactFormulaire.vue,views / formulaire de contact, examen 2-->
<!--Maud Harvey, 12 février 2021-->
<template>
    <div id="pageContact" class="container-fluid">           
      <fieldset>
        <legend><h1>{{ "title" | languageFilter(languageChoosen)}}</h1></legend>
           <!-- Dropdown pour le choix de la langue -->
        <div class="dropdown">
          <button class="dropbtn">{{languageChoosen}}</button>
          <div class="dropdown-content">
            <a class="traduction" @click="toggleLanguage(language)" v-for="language in languages" :key="language">{{language}}</a>
            <!-- Lors d'un évènement clic, méthode pour le changement de langue dans le mixin TranslateMixin.js  -->
          </div>
        </div>    
        <!-- Affichage des erreurs dans la validation du formulaire -->
        <div v-if="erreurs.length">
          <b>Corriger les erreurs suivantes:</b>
          <ul>
            <li :class="error" v-for="erreur in erreurs" :key="erreur">
              {{erreur}}
            </li>
          </ul>
        </div>
        <form id="formContact"  @submit.prevent="checkForm" novalidate=true>  
            <div class="form-group enligne">
              <label class="nom" for="nom">{{ "name" | languageFilter(languageChoosen)}}</label><br>
              <input v-model="nom" required type="text" id="nom" aria-describedby="nom">
            </div>
            <div class="form-group enligne">
                <label for="prenom">{{ "firstname" | languageFilter(languageChoosen)}}</label><br>
                <input v-model="prenom" required type="text" id="prenom" aria-describedby="prenom">
            </div>     
            <div class="form-group">
                <label for="courriel">{{ "email" | languageFilter(languageChoosen)}}</label><br>
                <input v-model="courriel" required type="email" id="courriel" name="courriel" aria-describedby="email"><br>
                <small id="emailHelp">Le courriel doit être valide</small>
            </div>               
            <div  class="form-group">
                <label class="my-1 mr-2" for="subjects">{{ "category" | languageFilter(languageChoosen)}}</label><br>
                <select required v-model="sujetChoisi" id="subjects">  
                    <option v-for="sujet in sujets" :key="sujet">{{sujet}}</option>
                </select>                               
            </div>
            <div  class="form-group">
                <label for="question">{{ "question" | languageFilter(languageChoosen)}}</label><br>
                <textarea v-model="question" id="question" rows="3"></textarea><br>
                <small>facultatif</small>
            </div>                
            <button type="submit">Soumettre</button>             
        </form>
      </fieldset>
    </div>
</template>

<script>
  import {TranslateMixin} from "../mixins/TranslateMixin"

  export default {
    mixins:[TranslateMixin],
    name: 'contact-formulaire',
    data: function () {
      return {
      erreurs: [],
      sujets: [
          "Offre d'emploi",
          "Recherche d'emploi",
          "Soumission de contrat",
          "Questions de programmation",
          "Autres",
      ],
      courriel: null,
      nom: null,
      prenom: null,
      sujetChoisi: null,
      question: null,
    };
  },
  methods: {
    //Méthode pour vérifier les champs requis et le pattern du email
    checkForm: function (e) {
      //Vider le tableau des erreurs
      this.erreurs = [];
      if (!this.nom) {
          this.erreurs.push("Un nom est requis");
      }
      if (!this.prenom) {
          this.erreurs.push("Un prénom est requis");
      }
      if (!this.courriel) {
          this.erreurs.push("Un courriel est requis");
          //Si la fonction retourne faux ajouter un message d'erreur
      } else if (!this.checkEmail(this.courriel)) {
          this.erreurs.push("Un courriel valide est requis");
      }
      if (!this.sujetChoisi) {
          this.erreurs.push("Une catégorie est requise");
      }
      //Si il n'y a aucune erreur l'attribut submit du formulaire est vrai
      if (!this.erreurs.length) {
          return true;
      }
      //Empêche de rafraîchir la page lors du submit
      e.preventDefault();
    },
      //re.test retourne true si le pattern est suivi
    checkEmail: function (email) {
      var re = /[a-z]@[a-z].[a-z]/;
      return re.test(email);
    },
   
  },
}
</script>
<!-- Ajouter l'attribut "scoped"  pour limiter le CSS à ce composant seulement -->
<style scoped>
  input, select{
    width: 50%;
    font-size: 1.1rem;
    padding: 1%;
  }
  textarea{
    width: 80%;
    font-size: 1.5rem;
    padding: 1%;
  }
  .form-group{
    margin: auto;
    width: 50%;
    padding-top: 2%;
  }
  .container-fluid{
    width: 100%;
    height: 100%;
  }
 
    /*Centrer le formulaire*/
  #pageContact{
    background-image: url("../assets/banniere.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-color: blue;
    background-size: cover;
    min-height: 100%;
    padding: 2%;
    }
  #formContact{
    width: 80%;
    margin: auto;
    }
    /*encadrement*/
  fieldset {
    font-size: 1.5rem;
    width: 90%;
    margin: auto;
    border: 1px dashed gray;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    }
  legend {
    color: black;
    }
    /*Bouton submit*/
  button {
    font-size: 1.5rem;
    float: right;
    background-color: #008cba;
    border: none;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }
  button:hover {
    background-color: #024257;
    }
    /*Pour le dropdown, choix de la langue */
  .dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  /* Position du contenu dans le dropdown */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Contenu du dropdown (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Liens du dropdown*/
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Changement de couleur lors du hover */
  .dropdown-content a:hover {background-color: #ddd;}

  /* Montrer le menu du dropdown lors du hover */
  .dropdown:hover .dropdown-content {display: block;}

  /* Change la couleur du background du bouton dropdown quand le menu du dropdown est visible */
  .dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>



