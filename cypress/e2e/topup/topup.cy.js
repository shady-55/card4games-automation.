/// <reference types="cypress" 
describe('Login', () => {
  it('should creat order topup successfully', () => {
    cy.visit('/')
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
  cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
   cy.get('.position-relative > .p-inputtext').type("Shady112200#")
   cy.get('[name="login"] > .mb-3').click();
   cy.get('.accept-btn').click();
   cy.get('.user > .dropdown-toggle > .ng-star-inserted').click();
   cy.get('.dropdown-menu > .user-list > .ng-star-inserted > .pi').click();
     cy.get('.SAR-currency > .pt-3 > .d-flex > .btn-outline-light').click();
   
  })

  
})