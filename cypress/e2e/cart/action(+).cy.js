/// <reference types="cypress" />

describe('Cart UI: Increase Quantity', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStoreUI();
  });

  it('should show increased quantity successfully', () => {
    cy.get('.shop > .dropdown-toggle > .pi').should('be.visible').click();
    cy.get('[name="view_cart"]').should('be.visible').click();
    cy.get('[name="changenumber"] > .bi').should('be.visible').click();
  });

});