import RegisterPage from '../support/pages/RegisterPage'

describe('Criação de usuário', () => {
  it('Deve criar um novo usuário com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="cadastrar"]').click()


    const user = {
      nome: 'Leonardo Teste',
      email: 'Leonardo_teste@teste.com',
      senha: 'teste123!'
    }

    cy.get('[data-testid="nome"]', { timeout: 10000 }).should('be.visible')
    cy.get('[data-testid="password"]', { timeout: 10000 }).should('be.visible')

    RegisterPage.preencherFormulario(user)
    RegisterPage.submeter()

    cy.contains('Cadastro realizado com sucesso', { timeout: 10000 })
      .should('be.visible')
  })
})
