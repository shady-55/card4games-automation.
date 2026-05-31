/// <reference types="cypress" />
describe('visit', () => {
    it('should open facebook app', () => {
        cy.visit('/');
        cy.scrollTo(0, 4000);
        cy.get(':nth-child(5) > a > img').click();
    });
});
