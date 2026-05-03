/// <reference types="cypress" />

describe('Cart UI: Open Cart', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStoreUI();
  });

  it('should show product successfully in cart', () => {
    cy.get('.shop > .dropdown-toggle > .pi').should('be.visible').click();
    cy.get('[name="view_cart"]').should('be.visible').click();
  });

});