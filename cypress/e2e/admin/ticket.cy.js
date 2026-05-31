/// <reference types="cypress" />

describe('ticket Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin(Cypress.env('email'), Cypress.env('password'));
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        cy.get(':nth-child(8) > .link > .label > span').should('be.visible').click();
        cy.get(':nth-child(8) > .sub-menu > .sub-menu-item.event-value > .label').should('be.visible').click();
    });

    it('ticket Management', () => {});
});
