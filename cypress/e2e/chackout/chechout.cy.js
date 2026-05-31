/// <reference types="cypress" />

describe('Checkout UI: Complete Order', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should check out successfully', () => {
        cy.get('.shop > .dropdown-toggle > .pi').should('be.visible').click();
        cy.get('[name="view_cart"]').should('be.visible').click();
        cy.get('[name="Checkout"]').should('be.visible').click();
        cy.get('#pn_id_17_content > .row > :nth-child(1) > .EGP-currency > .d-flex').should('be.visible').click();
        cy.get('.card-info > .col-12 > [name="pay"]').should('be.visible').click();
        cy.get('.col-md-3 > .btn-main').should('be.visible').click();
    });
});
