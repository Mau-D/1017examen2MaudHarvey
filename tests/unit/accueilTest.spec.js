//accueilTest.spec.js
//Maud Harvey, 25 février 2021
import { shallowMount } from "@vue/test-utils";
import PageAccueil from "../../src/views/PageAccueil";

//Test unitaire pour le composant PageAccueil
describe("PageAccueil", () => {
  //cas succès
  it("Vérifie que le titre contient Dévelopeur Front-End", () => {
    const pageAccueil = shallowMount(PageAccueil);
    const texteTitre = "Développeur Front-End";
    //cas succès, vérifie que le titre de la page d'accueil contient la chaîne de caractères `texteTitre`
    expect(pageAccueil.find(".titre").text()).toEqual(
      expect.stringContaining(texteTitre)
    );
  });
  //cas erreur
  it("Vérifie que le titre ne contient pas Dévelopeur Front-End", () => {
    const pageAccueil = shallowMount(PageAccueil, {
      data() {
        return {};
      },
    });
    const texteTitre = "Développeur Front-End";
    //cas erreur, vérifie que le titre de la page d'accueil ne contient pas la chaîne de caractères `texteTitre`
    expect(pageAccueil.find(".titre").text()).toEqual(
      expect.not.stringContaining(texteTitre)
    );
  });
});
