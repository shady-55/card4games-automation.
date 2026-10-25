/// <reference types="cypress" />

describe('Categories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Categories link
        cy.get('[ng-reflect-router-link="/panel/categories/categories-l"]').should('be.visible').click();
    });

    it('should update Categories', () => {
        // Find the first row in the table, then click the first button (Edit button) in the Actions column
        cy.get('[ng-reflect-index="0"] > :nth-child(9) > .d-flex > .btn-outline-success').click();
    });
});
