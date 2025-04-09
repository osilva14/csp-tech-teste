
class ContactPage {
  createContact({ firstName, lastName, email, phone }) {
    cy.contains('Add a New Contact').click();
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone);
    cy.contains('button', 'Submit').click();
  }

  getContactRow(email) {
    return cy.contains('td', email).parent('tr');
  }

  editContact(email, updatedFields) {
    this.getContactRow(email).within(() => {
      cy.contains('Edit').click();
    });
    if (updatedFields.firstName) {
      cy.get('#firstName').clear().type(updatedFields.firstName);
    }
    cy.contains('button', 'Submit').click();
  }

  deleteContact(email) {
    this.getContactRow(email).within(() => {
      cy.contains('Delete').click();
    });
  }
}
export default ContactPage;
