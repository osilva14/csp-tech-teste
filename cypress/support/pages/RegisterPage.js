class RegisterPage {
  preencherFormulario({ nome, email, senha, password }) {
    cy.get('[data-testid="nome"]').should('be.visible').type(nome)
    cy.get('[data-testid="email"]').should('be.visible').type(email)
    cy.get('[data-testid="password"]').should('be.visible').type(senha)

    if (password) {
      cy.get('[data-testid="password"]').should('be.visible').type(password)
    }
  }

  submeter() {
    cy.get('button[type="submit"]').should('be.enabled').click()
  }
}

export default new RegisterPage()
