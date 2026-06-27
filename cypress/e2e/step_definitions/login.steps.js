import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";
import usuario from "../../fixtures/usuario.json";

//Realizar login com sucesso
Given("que acesso a página {string}", (url) => {
  cy.visit(url);
});

When("preencho os dados de login", () => {
  loginPage.logar(usuario.email, usuario.senha);
});

Then("devo estar logado com sucesso como {string}", (nome) => {
  loginPage.loggedInAs.should('be.visible');
  cy.contains(nome).should('be.visible');
});

//Realizar busca de produto
Given("que acesso a página principal {string}", (url) => {
  cy.visit(url);
});

When("acesso a página de produtos", () => {
  cy.contains('a', 'Products').click();
});

When("preencho o campo de busca {string}", (produto) => {
  cy.get('#search_product').type(produto);
});

When("clico no botão de pesquisar", () => {
  cy.get('#submit_search').click();
});

Then("devo ver o produto {string} nos resultados", (produto) => {
  cy.contains(produto).should('be.visible');
});

When("adiciono o produto {string} ao carrinho", (nomeProduto) => {
  cy.contains('.single-products', nomeProduto)
    .find('a.add-to-cart')
    .first()
    .click({ force: true });
});

Then("deve aparecer a mensagem de confirmação {string}", (mensagem) => {
  cy.get('.modal-content').should('be.visible');
  cy.get('.modal-title').should('contain', mensagem);
});

When("clico em continuar comprando", () => {
  cy.contains('button', 'Continue Shopping').click();
});

When("acesso a página de carrinho", () => {
  cy.contains('a', ' Cart').click();
});

Then("o produto {string} deve estar visível no carrinho", (produto) => {
  cy.get('#cart_info').contains(produto).should('be.visible');
});