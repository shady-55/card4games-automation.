/// <reference types="cypress" 
describe('visit',()=>{
it('should open whats app', () => {
    cy.visit('/')
    cy.scrollTo(0, 4000);
   cy.get(':nth-child(2) > a > img').click();
    })
  })