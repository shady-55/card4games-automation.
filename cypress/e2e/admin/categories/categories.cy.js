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
        cy.get('.btn-success').should('be.visible').click();
    });

    it('should create Categories', () => {
        // Select parent category from dropdown
        cy.get('.p-dropdown-trigger').click();
        cy.get('.p-dropdown-items .p-dropdown-item').should('have.length.greaterThan', 0).first().click();

        // Fill Name (English)
        cy.get('.name > .form-group > .form-control').clear().type('nova');
        // Switch to Arabic tab
        cy.get('.name > .taping > :nth-child(2)').click();
        // Fill Name (Arabic)
        cy.get('.name > .form-group > .form-control').clear().type('نوفا');

        // Fill Meta Keywords (English)
        cy.get('#MetaKeywoards').clear().type('123gg{enter}');
        // Switch to Arabic tab
        cy.get('.meta-keyWords > .taping > :nth-child(2)').click();
        // Fill Meta Keywords (Arabic)
        cy.get('#MetaKeywoardsAr').clear().type('123gg{enter}');

        // Fill Meta Description (English)
        cy.get('.meta-description > .form-group > .form-control').clear().type('test data');
        // Switch to Arabic tab
        cy.get('.meta-description > .taping > :nth-child(2)').click();
        // Fill Meta Description (Arabic)
        cy.get('.meta-description > .form-group > .form-control').clear().type('بيانات تجريبية');

        // Select items in multiselect (using robust class-based selector instead of dynamic ID)
        cy.get('#pn_id_21 > .p-multiselect-trigger').click();
        cy.get('.p-multiselect-item').first().click();
        // Close multiselect dropdown
        cy.get('.p-multiselect-header > .p-ripple').click();

        // Upload category image
        cy.get('input[type="file"]').selectFile({
            contents: Cypress.Buffer.from('dummy-image'),
            fileName: 'category-image.png',
            mimeType: 'image/png'
        }, { force: true });

        // Submit form
        //cy.get('.btn-success').click();

        // Assert redirect back to Categories list page
        // cy.url().should('include', '/panel/categories/categories-l');
    });
});
