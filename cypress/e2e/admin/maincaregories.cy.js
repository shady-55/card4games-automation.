/// <reference types="cypress" />

describe('Main Categories Management', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.loginAdmin();
        cy.get(':nth-child(3) > .link > .pi-chevron-down', { timeout: 10000 }).should('be.visible').click()
        cy.get('[ng-reflect-router-link="/panel/categories/main-categor"]').click();
        cy.get('.btn-success').click();
    })

    it('should creat vocher product', () => {
        cy.get('.name > .form-group > .form-control').type("test categories")
        cy.get('.name > .taping > :nth-child(2)').click();
        cy.get('.name > .form-group > .form-control').type("كاتيجري تيست")
        cy.get('.meta-description > .form-group > .form-control').type("games")
        cy.get('.meta-description > .taping > :nth-child(2)').click();
        cy.get('.meta-description > .form-group > .form-control').type("العاب")
        cy.get('#MetaKeywoards').type("478756456456")
        cy.get('.meta-keyWords > .taping > :nth-child(2)').click();
        cy.get('#MetaKeywoardsAr').type("1545645646")
        cy.get('#pn_id_14 > .p-multiselect-trigger').click()
        cy.get('.p-multiselect-items .p-multiselect-item').eq(0).click()
    })
})