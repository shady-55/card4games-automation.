/// <reference types="cypress" />

describe('Register (Signup) Flow', () => {
    beforeEach(() => {
        // Visit home page and navigate to signup form
        cy.visit('/');
        cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
        cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="signup"]').click();
    });

    it('should register successfully with valid data', () => {
        // Fill signup form with valid details
        cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type('shady');
        cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type('vialo@fxzig.com');
        cy.get('.p-inputgroup > .position-relative > .p-inputtext').type('Shady120##');
        cy.get('[type="tel"]').type('1254789632');

        // Select country
        cy.get('.p-dropdown-trigger').click();
        cy.get('#pn_id_6_1 > .ng-star-inserted').click();

        // Submit form
        cy.get('[name="submit"] > .mb-3').click();
    });

    it('should not register successfully with a short phone number', () => {
        // Fill signup form with a phone number that is too short
        cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type('shady');
        cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type('vialo@fxzig.com');
        cy.get('.p-inputgroup > .position-relative > .p-inputtext').type('Shady120##');
        cy.get('[type="tel"]').type('12547632');

        // Select country
        cy.get('.p-dropdown-trigger').click();
        cy.get('#pn_id_6_1 > .ng-star-inserted').click();

        // Submit form
        cy.get('[name="submit"] > .mb-3').click();
    });

    it('should not register successfully with a short name', () => {
        // Fill signup form with a name that is too short (1 character)
        cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type('s');
        cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type('vialo@fxzig.com');
        cy.get('.p-inputgroup > .position-relative > .p-inputtext').type('Shady120##');
        cy.get('[type="tel"]').type('1254763211');

        // Select country
        cy.get('.p-dropdown-trigger').click();
        cy.get('#pn_id_6_1 > .ng-star-inserted').click();

        // Submit form
        cy.get('[name="submit"] > .mb-3').click();
    });

    it('should not register successfully with empty name (spaces)', () => {
        // Fill signup form with spaces as the name
        cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type('   ');
        cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type('vimmiilo@fxzig.com');
        cy.get('.p-inputgroup > .position-relative > .p-inputtext').type('Shady120##');
        cy.get('[type="tel"]').type('1254763211');

        // Select country
        cy.get('.p-dropdown-trigger').click();
        cy.get('#pn_id_6_1 > .ng-star-inserted').click();

        // Submit form
        cy.get('[name="submit"] > .mb-3').click();
    });
});
