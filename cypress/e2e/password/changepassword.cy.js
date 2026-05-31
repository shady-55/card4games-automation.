/// <reference types="cypress" />

describe('Password Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI();
    });

    it('should change password successfully', () => {
        cy.get('.user > .dropdown-toggle > .ng-star-inserted').should('be.visible').click();
        cy.get('.user-list > :nth-child(1) > .pi').should('be.visible').click();
        cy.get('.btn-main > span').should('be.visible').click();
        cy.get(':nth-child(1) > .p-inputgroup > .position-relative > .p-inputtext').type('Shady112200#');
        cy.get(':nth-child(2) > .p-inputgroup > .position-relative > .p-inputtext').type('shady457854#');
        cy.get(':nth-child(3) > .p-inputgroup > .position-relative > .p-inputtext').type('shady457854#');
    });
});
