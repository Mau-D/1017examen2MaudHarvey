//traductionTest.spec.js
//Maud Harvey, 25 février 2021
import { shallowMount } from "@vue/test-utils";
import ContactFormulaire from "../../src/views/ContactFormulaire";

//Test unitaire pour le Mixin TranslateMixin

describe("ContactFormulaire", () => {
  //cas succès, la langue du label name est en anglais
  it("Vérifie que le label est changé en anglais lors du choix de langue = en", async () => {
    const pageContact = shallowMount(ContactFormulaire, {
      data() {
        return {};
      },
    });
    await pageContact.setData({ languageChoosen: "en" });
    expect(pageContact.find(".nom").text()).toEqual("Last name");
  });
  //cas erreur, la langue du label name n'est pas en anglais
  it("Vérifie que le label n'est changé en anglais lors du choix de langue = en", async () => {
    const pageContact = shallowMount(ContactFormulaire, {
      data() {
        return {
          languageChoosen: "",
        };
      },
    });
    await pageContact.setData({ languageChoosen: "en" });
    expect(pageContact.find(".nom").text()).not.toEqual("Last name");
  });
});
