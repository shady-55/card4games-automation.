/// <reference types="cypress" 
describe('register ',()=>{
it('should register successfully', () => {
cy.visit('/')
cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="signup"]').click();
cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type("shady")
cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type("vialo@fxzig.com")
cy.get('.p-inputgroup > .position-relative > .p-inputtext').type("Shady120##")
cy.get('[type="tel"]').type("1254789632")
cy.get('.p-dropdown-trigger').click();
cy.get('#pn_id_6_1 > .ng-star-inserted').click();
cy.get('[name="submit"] > .mb-3').click();
    })
it('should register not successfully', () => {
cy.visit('/')
cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="signup"]').click();
cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type("shady")
cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type("vialo@fxzig.com")
cy.get('.p-inputgroup > .position-relative > .p-inputtext').type("Shady120##")
cy.get('[type="tel"]').type("12547632")
cy.get('.p-dropdown-trigger').click();
cy.get('#pn_id_6_1 > .ng-star-inserted').click();
cy.get('[name="submit"] > .mb-3').click();
    })
        it('should register not successfully', () => {
cy.visit('/')
cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="signup"]').click();
cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type("s")
cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type("vialo@fxzig.com")
cy.get('.p-inputgroup > .position-relative > .p-inputtext').type("Shady120##")
cy.get('[type="tel"]').type("1254763211")
cy.get('.p-dropdown-trigger').click();
cy.get('#pn_id_6_1 > .ng-star-inserted').click();
cy.get('[name="submit"] > .mb-3').click();
    })
   it('should register not successfully', () => {
cy.visit('/')
cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="signup"]').click();
cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type("   ")
cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type("vimmiilo@fxzig.com")
cy.get('.p-inputgroup > .position-relative > .p-inputtext').type("Shady120##")
cy.get('[type="tel"]').type("1254763211")
cy.get('.p-dropdown-trigger').click();
cy.get('#pn_id_6_1 > .ng-star-inserted').click();
cy.get('[name="submit"] > .mb-3').click();
    })

  })