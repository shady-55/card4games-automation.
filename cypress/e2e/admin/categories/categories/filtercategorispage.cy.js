/// <reference types="cypress" />

describe('Categories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Categories link
        cy.get('[ng-reflect-router-link="/panel/categories/categories-l"]').should('be.visible').click();
        // Click Add Category button
        //cy.get('.btn-success').should('be.visible').click();
    });

    it('should filter Categories', () => {
        cy.get('.arrow > .pi').click();
        cy.get('[style="--i: 0;"]').click();
        cy.wait(2000);
        cy.get('.table-input-filters > .table-action-btn')
            .should('be.visible')
            .click();

        //cy.contains(/^\s*new merg\s*$/i)
        //  .click();


    });

});
