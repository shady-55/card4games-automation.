/// <reference types="cypress" 
import LoginPage from '../pages/login'
describe('Login Test', () => {
  it('should login successfully', () => {
    const loginPage = new LoginPage()
    loginPage.load()
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
  cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
    loginPage.login(Cypress.env("email"), Cypress.env("password"))
       })
})
  
