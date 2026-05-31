/// <reference types="cypress" />
describe('visit', () => {
    it('should open twitter app', () => {
        cy.visit('/');
        cy.scrollTo(0, 4000);
        cy.get(':nth-child(4) > a > img').click();
    });
});
