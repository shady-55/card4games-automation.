/// <reference types="cypress" />

describe('Login', () => {

  beforeEach(() => {
    // Visit the home page and navigate to the login form
    cy.visit('/')
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click()
    cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click()
  })

  it('should login successfully', () => {
    cy.get('.p-inputgroup > .p-inputtext').type(Cypress.env('email'))
    cy.get('.position-relative > .p-inputtext').type(Cypress.env('password'), { log: false })
    cy.get('[name="login"] > .mb-3').click()
    cy.get('.accept-btn').click()
  })

  it('should not login successfully with wrong credentials', () => {
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
    cy.get('.position-relative > .p-inputtext').type("Shady1125200#")
    cy.get('[name="login"] > .mb-3').click()
    cy.get('.accept-btn').click()
  })

  it('should not login successfully with wrong password', () => {
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
    cy.get('.position-relative > .p-inputtext').type("Shady11220")
    cy.get('[name="login"] > .mb-3').click()
    cy.get('.accept-btn').click()
  })

  it('should not login successfully with empty fields', () => {
    cy.get('[name="login"] > .mb-3').click()
    cy.get('.accept-btn').click()
  })

})