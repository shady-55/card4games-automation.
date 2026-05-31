/// <reference types="cypress" />

describe('Main Categories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Main Categories link
        cy.get('[ng-reflect-router-link="/panel/categories/main-categor"]').should('be.visible').click();
        // Click Add Main Category button
        cy.get('.btn-success').should('be.visible').click();
    });

    it('should create Main Categories', () => {
        // Fill Name (English)
        cy.get('.name > .form-group > .form-control').should('be.visible').clear().type('test categories');
        // Switch to Arabic tab
        cy.get('.name > .taping > :nth-child(2)').click();
        // Fill Name (Arabic)
        cy.get('.name > .form-group > .form-control').clear().type('كاتيجري تيست');

        // Fill Meta Description (English)
        cy.get('.meta-description > .form-group > .form-control').should('be.visible').clear().type('games');
        // Switch to Arabic tab
        cy.get('.meta-description > .taping > :nth-child(2)').click();
        // Fill Meta Description (Arabic)
        cy.get('.meta-description > .form-group > .form-control').clear().type('العاب');

        // Fill Meta Keywords (English)
        cy.get('#MetaKeywoards').should('be.visible').clear().type('123gg{enter}');

        cy.get('.meta-keyWords > .taping > :nth-child(2)').click();
        // Fill Meta Keywords (Arabic)
        cy.get('#MetaKeywoardsAr').should('be.visible').clear().type('1545645646{enter}');
        cy.get('#pn_id_14 > .p-multiselect-trigger').click()
        cy.get('.p-multiselect-panel .p-multiselect-item').first().click()

        // Submit form
        //cy.get('.btn-success').click();

        // Assert redirect back to Main Categories list page
        //cy.url().should('include', '/panel/categories/main-categor');
    });
});
