describe('Exclusão de usuário via API', () => {
  it('Deve excluir o usuário criado', () => {
    cy.request('GET', 'https://serverest.dev/usuarios')
      .then(res => {
        const usuario = res.body.usuarios.find(u => u.email === 'Leonardo_teste@teste.com')
        expect(usuario).to.exist
        cy.request('DELETE', `https://serverest.dev/usuarios/${usuario._id}`)
          .its('status').should('eq', 200)
      })
  })
})