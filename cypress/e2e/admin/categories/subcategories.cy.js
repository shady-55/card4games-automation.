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
        cy.get('.btn-success').should('be.visible').click();
    });

    it('should create Subcategory', () => {
        // Fill Name (English)
        cy.get('.name > .form-group > .form-control').clear().type('noooo');
        // Switch to Arabic tab
        cy.get('.name > .taping > :nth-child(2)').click();
        // Fill Name (Arabic)
        cy.get('.name > .form-group > .form-control').clear().type('نووو');

        // Select Category (first dropdown on the page)
        cy.get('.p-dropdown').eq(0).find('.p-dropdown-trigger').click();
        cy.get('.p-dropdown-item').contains('card').click();

        // Select Main Category (second dropdown on the page)
        cy.get('.p-dropdown').eq(1).find('.p-dropdown-trigger').click();
        cy.get('.p-dropdown-item').contains('card category').click();

        // Upload first image (Logo/Icon)
        cy.get('input[type="file"]').eq(0).selectFile({
            contents: Cypress.Buffer.from('dummy-image-1'),
            fileName: 'logo.png',
            mimeType: 'image/png'
        }, { force: true });

        // Upload second image (Banner/Cover)
        cy.get('input[type="file"]').eq(1).selectFile({
            contents: Cypress.Buffer.from('dummy-image-2'),
            fileName: 'banner.png',
            mimeType: 'image/png'
        }, { force: true });

        // Submit form
        //cy.get('.btn-success').click();

        // Assert redirect back to Subcategories list page
        //cy.url().should('include', '/panel/categories/sub-categori');
    });
});
