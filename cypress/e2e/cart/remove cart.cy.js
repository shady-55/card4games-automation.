/// <reference types="cypress" />

describe('Cart UI: Remove Item', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should remove product successfully', () => {
        cy.get('.shop > .dropdown-toggle > .pi').should('be.visible').click();
        cy.get('[name="view_cart"]').should('be.visible').click();
        cy.get('.col-md-1 > .pi').should('be.visible').click();
    });
});
