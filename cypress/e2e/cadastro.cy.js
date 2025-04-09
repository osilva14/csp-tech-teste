
import LoginPage from '../support/LoginPage';
import ContactPage from '../support/ContactPage';

const login = new LoginPage();
const contact = new ContactPage();

describe('Cadastro de contato', () => {
  beforeEach(() => {
    cy.visit('/login');
    login.login('testuser@example.com', 'Testing123!');
  });

  it('Deve criar um novo contato com sucesso', () => {
    const novoContato = {
      firstName: 'Novo',
      lastName: 'Contato',
      email: 'novo@teste.com',
      phone: '999999999',
    };

    contact.createContact(novoContato);
    contact.getContactRow(novoContato.email).should('exist');
  });
});
