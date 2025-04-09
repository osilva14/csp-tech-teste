
import LoginPage from '../support/LoginPage';
import ContactPage from '../support/ContactPage';

const login = new LoginPage();
const contact = new ContactPage();

describe('Edição de contato', () => {
  const email = 'novo@teste.com';
  const nomeAtualizado = 'Editado';

  beforeEach(() => {
    cy.visit('/login');
    login.login('testuser@example.com', 'Testing123!');
  });

  it('Deve editar um contato com sucesso', () => {
    contact.editContact(email, { firstName: nomeAtualizado });
    contact.getContactRow(email).should('contain', nomeAtualizado);
  });
});
