/// <reference types="cypress" />
describe('visit', () => {
    it('should open instgram app', () => {
        cy.visit('/');
        cy.scrollTo(0, 4000);
        cy.get('.social > :nth-child(1) > a > img').click();
    });
});
