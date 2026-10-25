/// <reference types="cypress" />

describe('Subcategories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Subcategories link
        cy.get('[ng-reflect-router-link="/panel/categories/sub-categori"]').should('be.visible').click();
        // Click Add Subcategory button
        //cy.get('.btn-success').should('be.visible').click();
    });

    it('should mange Subcategory', () => {
        cy.get('#pn_id_8 > .p-dropdown-label')
            .should('be.visible')
            .click();


        cy.get('.p-dropdown-item')
            .should('have.length.greaterThan', 4)
            .eq(4)
            .click();
        cy.get('.tapping-box > .gap-2 > .ng-untouched')
            .first()
            .click();

        cy.get('[role="option"]')
            .first()
            .click();
        cy.wait(2000);
        cy.get('.btn > .fa-solid').click();
    })
})