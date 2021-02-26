//contactTest.spec.js
//Maud Harvey, 26 février 2021
import { shallowMount } from "@vue/test-utils";
import ContactFormulaire from "../../src/views/ContactFormulaire";
//Test unitaire pour le composant ContactFormulaire
describe("ContactFormulaire", () => {
  //Cas succès, vérifie que lors du submit le tableau d'erreurs n'est pas vide
  it("vérifie que lors du submit du formulaire, le tableau d'erreur n'est pas vide", async () => {
    const pageContact = shallowMount(ContactFormulaire, {
      data() {
        return {
          nom: "",
        };
      },
    });
    await pageContact.find("form").trigger("submit.prevent");

    expect(pageContact.find("erreurs").exists()).not.toEqual([]);
  });
  //cas erreur,vérifie que lors du submit le tableau d'erreurs est vide
  it("Vérifie que le tableau d'erreurs n'est pas vide lors du submit", async () => {
    const pageContact = shallowMount(ContactFormulaire, {
      data() {
        return {
          nom: "",
          erreurs: [],
        };
      },
    });

    await pageContact.find("form").trigger("submit.prevent");

    expect(pageContact.find("erreurs").exists()).toEqual([]);
  });
});
