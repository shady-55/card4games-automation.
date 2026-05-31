/// <reference types="cypress" />
describe('Login', () => {
    it('should login successfully', () => {
        cy.visit('/');
        cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
        cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
        cy.get('.reset').click();
        cy.get('.p-inputtext').type('shadymohamed225@gmail.com');
        //cy.get('[name="send"]').click();
    });
});
