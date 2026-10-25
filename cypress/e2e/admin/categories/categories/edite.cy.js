/// <reference types="cypress" />

describe('', () => {
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
    it('edit the first caegory in table', () => {
        const randomSuffix = Math.floor(Math.random() * 100000);
        const nameEn = `nova-${randomSuffix}`;
        cy.get(':nth-child(1) > :nth-child(9) > .d-flex > .table-action-btn--edit').click();
        cy.wait(2000);
        cy.get('.name > .form-group > .form-control').clear().type(nameEn);
        cy.get('.btn-success > span').click();
    })
});
