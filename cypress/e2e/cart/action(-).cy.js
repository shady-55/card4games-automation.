/// <reference types="cypress" />

describe('Cart UI: Decrease Quantity', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should reduce quantity successfully', () => {
        cy.get('.shop > .dropdown-toggle > .pi').should('be.visible').click();
        cy.get('[name="view_cart"]').should('be.visible').click();
        cy.get('[name="quantity"] > .bi').should('be.visible').click();
    });
});
