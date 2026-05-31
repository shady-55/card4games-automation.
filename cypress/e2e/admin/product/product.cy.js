/// <reference types="cypress" />

describe('Create Product', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();

        // Navigate to the create product form
        cy.get(':nth-child(4) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        cy.get('[routerlink="/panel/products/new-product/form"] > .label').should('be.visible').click();
    });

    it('should create voucher product', () => {
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > #name').type('nova');
        cy.get('#nameArabic').type('نوفا');
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > #name').type('100');
        cy.get('#costPrice').type('60');
        cy.get('#silver').type('90');
        cy.get('#gold').type('80');
        cy.get('#diamond').type('70');

        cy.get(':nth-child(1) > .dropdown > .btn').click();
        cy.get('.show').contains('Gift Cards').click();
        cy.get(':nth-child(2) > .dropdown > .btn').click();
        cy.get('.show').contains('google play').click();
        cy.get(':nth-child(3) > .dropdown > .btn').click();
        cy.get('.show').contains('google play USA').click();
        cy.get('#fees').type('10');
    });

    it('should create topup product', () => {
        cy.get(':nth-child(2) > [name="productType"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > #name').type('nova');
        cy.get('#nameArabic').type('نوفا');
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > #name').type('100');
        cy.get('#costPrice').type('60');
        cy.get('#silver').type('90');
        cy.get('#gold').type('80');
        cy.get('#diamond').type('70');

        cy.get(':nth-child(1) > .dropdown > .btn').click();
        cy.get('.show').contains('Gift Cards').click();
        cy.get(':nth-child(2) > .dropdown > .btn').click();
        cy.get('.show').contains('google play').click();
        cy.get(':nth-child(3) > .dropdown > .btn').click();
        cy.get('.show').contains('google play USA').click();
        cy.get('#fees').type('10');
    });

    it('should create range product', () => {
        cy.get(':nth-child(3) > [name="productType"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > #name').type('nova');
        cy.get('#nameArabic').type('نوفا');

        cy.get(':nth-child(1) > .dropdown > .btn').click();
        cy.get('.show').contains('Gift Cards').click();
        cy.get(':nth-child(2) > .dropdown > .btn').click();
        cy.get('.show').contains('google play').click();
        cy.get(':nth-child(3) > .dropdown > .btn').click();
        cy.get('.show').contains('google play USA').click();
        cy.get('#fees').type('10');
    });
});
