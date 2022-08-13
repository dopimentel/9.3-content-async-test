require("../mocks/fetchSimulator");
const { fetchCharacter } = require("../src/fetchCharacter");

describe("Teste a função fetchCharacter", () => {
  it("Verifica se o nome da personagem é Wonder Woman", async () => {
    const caracter = await fetchCharacter("720");
    expect(caracter.name).toBe("Wonder Woman");
  });

  it("Verifica se retorna erro ao executar a função sem parâmetro", async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error("You must provide an url"));
  });
});
