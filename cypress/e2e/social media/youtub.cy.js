/// <reference types="cypress" 
describe('visit',()=>{
it('should open youtub app', () => {
    cy.visit('/')
    cy.scrollTo(0, 4000);
   cy.get(':nth-child(3) > a > img').click();
    })
  })