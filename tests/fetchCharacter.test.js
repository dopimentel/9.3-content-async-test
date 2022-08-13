require("../mocks/fetchSimulator");
const { fetchCharacter } = require("../src/fetchCharacter");

describe("Teste a função fetchCharacter", () => {
  it("o nome da personagem é Wonder Woman", async () => {
    const caracter = await fetchCharacter("720");
    expect(caracter.name).toBe("Wonder Woman");
  });

  it("retorna erro ao executar a função sem parâmetro", async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error("You must provide an url"));
  });

  it("retorna 'Invalid id' ao executar a função com parâmetro que não existe", async () => {
    const response = await fetchCharacter("dfdfgdfgfg ghgsd");
    expect(response).toBe("Invalid id");
  });

  it("se fetch é chamada com o endpoint correto", async () => {
    const url = "https://www.superheroapi.com/api.php/4192484924171229/720";
    await fetchCharacter("720");
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });


});
