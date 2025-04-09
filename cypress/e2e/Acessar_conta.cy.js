
import LoginPage from '../support/LoginPage';
import ContactPage from '../support/ContactPage';

const login = new LoginPage();
const contact = new ContactPage();

describe('Exclusão de contato', () => {
  const email = 'novo@teste.com';

  beforeEach(() => {
    cy.visit('/login');
    login.login('testuser@example.com', 'Testing123!');
  });

  it('Deve excluir um contato com sucesso', () => {
    contact.deleteContact(email);
    contact.getContactRow(email).should('not.exist');
  });
});
