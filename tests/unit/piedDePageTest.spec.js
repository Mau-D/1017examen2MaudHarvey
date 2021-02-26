//piedDePageTest.spec.js
//Maud Harvey, 25 février 2021
import { shallowMount } from "@vue/test-utils";
import PiedDePage from "../../src/components/PiedDePage";

//Test unitaire pour le composant PiedDePage
describe("PiedDePage", () => {
  it("Vérifie que le Footer est un composant PiedDePage", () => {
    const sectionFooter = shallowMount(PiedDePage, {});

    //cas succès, vérifie que c'est un composant PiedDePage
    expect(sectionFooter.is(PiedDePage)).toBe(true);
  });
  it("Vérifie que le Footer est un composant PiedDePage", () => {
    const sectionFooter = shallowMount(PiedDePage, {});

    //cas erreur, vérifie que ce n'est pas un composant PiedDePage
    expect(sectionFooter.is(PiedDePage)).toBe(false);
  });
});
