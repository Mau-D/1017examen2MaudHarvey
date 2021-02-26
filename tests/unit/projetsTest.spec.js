//projetsTest.spec.js
//Maud Harvey, 25 février 2021
import ProjetsListe from "../../src/views/ProjetsListe";

//Test unitaire pour le composant ProjetsListe
describe("ProjetsListe", () => {
  it("Vérifie que la propriété data est une fonction", () => {
    //cas succès, vérifie que la propriété data du composant est de type function
    expect(typeof ProjetsListe.data).toBe("function");
  });
  it("Vérifie que le tableau projets n'est pas undefined", () => {
    //cas erreur, vérifie que la propriété data du composant n'est pas de type function
    expect(typeof ProjetsListe.data).not.toBe("function");
  });
});
