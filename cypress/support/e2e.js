// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Ignora erros vindos do próprio código do site para não quebrar o teste
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Intercepta e bloqueia anúncios pesados que travam a tela no Cypress
beforeEach(() => {
  cy.intercept('GET', '**/googleads.**', { statusCode: 200, body: '' });
  cy.intercept('GET', '**/pagead/**', { statusCode: 200, body: '' });
  cy.intercept('GET', '**/doubleclick.**', { statusCode: 200, body: '' });
  cy.intercept('GET', '**/googlesyndication.**', { statusCode: 200, body: '' });
});