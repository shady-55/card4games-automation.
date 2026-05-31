/// <reference types="cypress" />

describe('Notifications UI', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should open and view notifications successfully', () => {
        cy.get('.dropdown > .pi').should('be.visible').click();
        cy.get('.see-all').should('be.visible').click();
        cy.get('.d-flex.justify-content-between > .btn').should('be.visible').click();
        cy.get('.d-flex > .btn-primary').should('be.visible').click();
    });
});
