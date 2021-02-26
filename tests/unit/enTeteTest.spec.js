//enTeteTest.spec.js
//Maud Harvey, 25 février 2021
import { shallowMount } from "@vue/test-utils";
import EnTete from "../../src/components/EnTete";

//Test unitaire pour le composant EnTete

describe("EnTete", () => {
  it("Vérifie que le lien Accueil amène à la page d'accueil", () => {
    const pageAccueil = shallowMount(EnTete, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageAccueil.find(".Accueil");
    //cas succès, vérifie que le lien conduit à la page d'accueil
    expect(link.attributes("to")).toBe("/");
  });
  it("Vérifie que le lien Accueil amène à la page d'accueil", () => {
    const pageAccueil = shallowMount(EnTete, {
      stubs: ["router-link", "router-view"],
    });
    const link = pageAccueil.find(".Accueil");

    //cas erreur, vérifie que le lien ne conduit pas à la page d'accueil
    expect(link.attributes("to")).not.toBe("/");
  });
});
