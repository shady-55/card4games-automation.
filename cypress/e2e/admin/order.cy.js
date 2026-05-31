/// <reference types="cypress" />

describe('Order Management', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
    });

    it('should view orders list successfully', () => {
        cy.get(':nth-child(7) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click();
        cy.get('[routerlink="/panel/orders/ordersList"] > .label').should('be.visible').click();
        cy.get('.p-element > :nth-child(1) > .align-items-center > .btn-success > .pi').click();
    });
});
