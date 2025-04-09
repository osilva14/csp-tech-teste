import LoginPage from '../support/pages/LoginPage'

describe('Visualização de usuário', () => {
  it('Deve realizar login e verificar dados', () => {
    cy.visit('https://front.serverest.dev/login')
    LoginPage.logar('Leonardo_teste@teste.com', 'teste123!')
    cy.url().should('include', '/home')
  })
})