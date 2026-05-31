/// <reference types="cypress" />

describe('Quick Links Navigation', () => {
    it('should open Blogs page successfully', () => {
        cy.viewport(1920, 1080);
        cy.visit('/');
        cy.scrollTo(0, 4000);
        cy.get(':nth-child(6) > .desc-footer').should('be.visible').click();
    });
});
