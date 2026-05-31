/// <reference types="cypress" />
describe('Login', () => {
    it('should change setting successfully', () => {
        cy.visit('/');
        cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
        cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
        cy.get('.p-inputgroup > .p-inputtext').type('vilalo@fxzig.com');
        cy.get('.position-relative > .p-inputtext').type('Shady112200#');
        cy.get('[name="login"] > .mb-3').click();
        cy.get('.accept-btn').click();
        cy.get('.lang-btn > .pi').click();
        cy.get('#pn_id_13 > .p-dropdown-trigger').click();
        cy.contains('.p-dropdown-item', 'عربي').click({ force: true });
        cy.get('.justify-content-between > img').click();
        cy.contains('.p-dropdown-item', 'EUR').click({ force: true });
        //cy.get('.save-button').click();
    });
});
