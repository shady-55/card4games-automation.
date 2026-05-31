/// <reference types="cypress" />
describe('Login', () => {
    it('should change setting successfully', () => {
        cy.visit('/');
        cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
        cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
        cy.get('.p-inputgroup > .p-inputtext').type(Cypress.env('email'));
        cy.get('.position-relative > .p-inputtext').type(Cypress.env('password'), { log: false });
        cy.get('[name="login"] > .mb-3').click();
        cy.get('.accept-btn').click();
        cy.get(':nth-child(5) > a > p').click();
        cy.get('#category-1 > .item-slider > figure > img').click();
        cy.get(':nth-child(1) > .item-slider > .m-0 > .img-category').click();
        cy.get('[name="addcart"]').click();
        cy.get('.shop > .dropdown-toggle > .pi').click();
        cy.get('[name="view_cart"]').click();
        cy.get('[name="changenumber"] > .bi').click();
        cy.get('[name="Checkout"]').click();
        cy.get('#pn_id_26_content > .row > :nth-child(1) > .EGP-currency > .d-flex').click();
        cy.get('.card-info > .col-12 > [name="pay"]').click();
        cy.get('.col-md-3 > .btn-main').click();
    });
});
