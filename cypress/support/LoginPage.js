
class LoginPage {
  login(email, password) {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.contains('button', 'Submit').click();
  }
}
export default LoginPage;
