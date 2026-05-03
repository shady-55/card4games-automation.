/// <reference types="cypress" />

describe('Mood Settings', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStoreUI();
  });

  it('should toggle light/dark mood successfully', () => {
    cy.get('.mood-icon > .pi').should('be.visible').click();
    // cy.get('.mood-icon > .pi').click();
  });

});