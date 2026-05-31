/// <reference types="cypress" />

describe('Wallet Settings', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should add wallet successfully', () => {
        cy.get('.user > .dropdown-toggle > .ng-star-inserted').should('be.visible').click();
        cy.get('.dropdown-menu > .user-list > .ng-star-inserted').should('be.visible').click();
        cy.get('.d-flex > .pi').should('be.visible').click();
        cy.get('.p-dropdown-trigger').should('be.visible').click();
        cy.contains('.p-dropdown-item', 'EGP').should('be.visible').click({ force: true });
        cy.get('.col-md-12 > .btn-main').should('be.visible').click();
    });
});
