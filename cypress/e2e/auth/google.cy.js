/// <reference types="cypress" 
describe('visit',()=>{
it('should open google sign in page', () => {
    cy.visit('//en/auth/signin')
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
    cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
   cy.get('[href="https://api-dev.card4games.com/v1/auth/google"] > .pi').click();
    })
  })