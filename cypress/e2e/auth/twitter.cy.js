/// <reference types="cypress" 
describe('visit',()=>{
it('should open twitter page', () => {
    cy.visit('//en/auth/signin')
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
    cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
    cy.get('.fa-brands').click();
    })
    
  })