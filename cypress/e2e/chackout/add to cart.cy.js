/// <reference types="cypress" />

describe('Checkout UI: Add to Cart', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.loginStoreUI();
  });

  it('should add a product successfully', () => {
    cy.get(':nth-child(5) > a > p').should('be.visible').click();
    cy.get('#category-1 > .item-slider > figure > img').should('be.visible').click();
    cy.get(':nth-child(1) > .item-slider > .m-0 > .img-category').should('be.visible').click();
    cy.get('[name="addcart"]').should('be.visible').click();
  });

});