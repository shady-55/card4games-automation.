/// <reference types="cypress" />
describe('Categories Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        // Open Categories menu in sidebar
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        // Click Categories link
        cy.get('[ng-reflect-router-link="/panel/categories/categories-l"]').should('be.visible').click();
    })
    it("should delete category and make it back to trash", () => {
        cy.get(':nth-child(1) > :nth-child(9) > .d-flex > .table-action-btn--delete').click();
        //wait until modal is visible
        cy.get('.modal-btn-purple').should('be.visible');
        //wait until modal is visible
        cy.wait(2000);
        cy.get('.modal-btn-purple').click();
        //go to trash page
        cy.get('.table-filters > :nth-child(1)').click();
        //wait until modal is visible
        // cy.wait(2000);
        // cy.get(':nth-child(1) > :nth-child(9) > .d-flex > .table-action-btn').click();
        //wait until modal is visible
        //cy.wait(2000);
        //cy.get('.modal-btn-warning').click();
    })

})