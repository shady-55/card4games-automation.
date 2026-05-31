/// <reference types="cypress" />

describe('Quick Links Navigation', () => {
    it('should open About Us page successfully', () => {
        cy.viewport(1920, 1080);
        cy.visit('/');
        cy.scrollTo(0, 4000);
        cy.get('.list-unstyled > :nth-child(1) > .desc-footer').should('be.visible').click();
    });
});
