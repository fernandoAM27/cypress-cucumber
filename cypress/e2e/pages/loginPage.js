class LoginPage {
  get emailInput() { return cy.get('[data-qa="login-email"]'); }
  get passwordInput() { return cy.get('[data-qa="login-password"]'); }
  get loginButton() { return cy.get('[data-qa="login-button"]'); }
  get loggedInAs() { return cy.contains('Logged in as'); }

  logar(email, senha) {
    this.emailInput.type(email);
    this.passwordInput.type(senha);
    this.loginButton.click();
  }
}

export default new LoginPage();
