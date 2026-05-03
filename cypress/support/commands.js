// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('loginAdmin', (email, password) => {
  cy.visit('https://admin-dev.card4games.com/auth/login');
  cy.get('[name="email"]').type(email);
  cy.get('[name="password"]').type(password);
  cy.get('button.ng-star-inserted').click();
  
  cy.log('⏳ Waiting 10 seconds for manual OTP entry...');
  // الانتظار 10 ثواني عشان تلحق تكتب كود الـ OTP بإيدك وتدوس Verify
  cy.wait(10000);
});

Cypress.Commands.add('loginStoreUI', (email, password) => {
  cy.visit('/');
  cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
  cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
  cy.get('.p-inputgroup > .p-inputtext').type(email);
  cy.get('.position-relative > .p-inputtext').type(password, { log: false });
  cy.get('[name="login"] > .mb-3').click();
  cy.get('.accept-btn').click();
});