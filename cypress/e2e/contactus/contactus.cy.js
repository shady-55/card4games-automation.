/// <reference types="cypress" />

describe('Contact Us Form', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginStoreUI(Cypress.env('email'), Cypress.env('password'));

        // الانتقال لصفحة اتصل بنا
        cy.get(':nth-child(2) > .desc-footer').should('be.visible').click();
    });

    it('should send successfully with valid data', () => {
        cy.get('input[formcontrolname="fullName"]').clear().type('shady');
        cy.get('input[formcontrolname="email"]').clear().type('shady44@gmail.com');
        cy.get('input[formcontrolname="phone"]').clear().type('4125788881');
        cy.get('textarea[formcontrolname="message"]').clear().type('This is a test message from Cypress');
        cy.get('[name="send"]').should('be.visible').click();
    });

    it('should not send with short message', () => {
        cy.get('input[formcontrolname="fullName"]').clear().type('shady');
        cy.get('input[formcontrolname="email"]').clear().type('shady44@gmail.com');
        cy.get('input[formcontrolname="phone"]').clear().type('4125788881');
        cy.get('textarea[formcontrolname="message"]').clear().type('This');
        cy.get('[name="send"]').should('be.visible').click();
    });

    it('should not send with short full name', () => {
        cy.get('input[formcontrolname="fullName"]').clear().type('sh');
        cy.get('input[formcontrolname="email"]').clear().type('shady44@gmail.com');
        cy.get('input[formcontrolname="phone"]').clear().type('4125788881');
        cy.get('textarea[formcontrolname="message"]').clear().type('This is a test message from Cypress');
        cy.get('[name="send"]').should('be.visible').click();
    });
});
