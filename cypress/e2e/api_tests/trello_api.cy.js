describe("Desafio de API - Trello", () => {
  it("Deve validar o campo 'name' da estrutura 'list' e o status code 200", () => {
    cy.request("GET", "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").then((response) => {

      expect(response.status).to.eq(200);

      const nomeDaLista = response.body.data.list.name;
      cy.log("Nome da lista encontrada: " + nomeDaLista);
      expect(nomeDaLista).to.not.be.empty;

    });
  });
});