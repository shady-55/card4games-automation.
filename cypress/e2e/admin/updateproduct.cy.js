/// <reference types="cypress" />

describe('Update Product', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
    });

    it('should navigate to update product screen', () => {
        cy.get(':nth-child(4) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        cy.get('[routerlink="/panel/products/products"] > .label').should('be.visible').click();
        cy.get(':nth-child(1) > .d-flex > .btn-info > .pi').click();
    });
});
