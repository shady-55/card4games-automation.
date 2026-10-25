//reactivate this when you have data in trash
/// <reference types="cypress" />

describe('Main Categories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Categories link
        cy.get('[ng-reflect-router-link="/panel/categories/main-categor"]').should('be.visible').click();
        // Click Add Category button
        //cy.get('.btn-success').should('be.visible').click();
    });

    it('should search Categories', () => {
        //  search for category by name
        cy.get('input.ng-star-inserted').type("new data").type("{enter}");
        //wait until load data
        cy.wait(2000);
        // clear search
        cy.get('.table-input-filters > .table-action-btn').click();
    });

});

