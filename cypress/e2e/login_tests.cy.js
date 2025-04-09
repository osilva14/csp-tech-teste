
import LoginPage from '../support/LoginPage';
const login = new LoginPage();

describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('/login');
    login.login('testuser@example.com', 'Testing123!');
    cy.url().should('include', '/contactList');
  });
});
