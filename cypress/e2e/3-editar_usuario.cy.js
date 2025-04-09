describe('Edição de usuário via API', () => {
  it('Deve editar o usuário criado', () => {
    cy.request('GET', 'https://serverest.dev/usuarios')
      .then(res => {
        const usuario = res.body.usuarios.find(u => u.email === 'Leonardo_teste@teste.com')
        expect(usuario).to.exist
        cy.request('PUT', `https://serverest.dev/usuarios/${usuario._id}`, {
          nome: 'Leonardo Atualizado',
          email: usuario.email,
          password: 'teste1234!',
          administrador: 'true'
        }).its('status').should('eq', 200)
      })
  })
})