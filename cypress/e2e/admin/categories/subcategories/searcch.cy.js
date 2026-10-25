/// <reference types="cypress" />

describe('Subcategories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Subcategories link
        cy.get('[ng-reflect-router-link="/panel/categories/sub-categori"]').should('be.visible').click();

    });

    it('should create Subcategory', () => {
        //  search for sub category by name
        cy.get('.form-control').type("nova").type("{enter}");
        //wait until load data
        cy.wait(2000);
        // clear search
        cy.get('.btns > .btn-outline-danger').click();
    });
});
