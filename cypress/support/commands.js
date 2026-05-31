Cypress.Commands.add('loginAdmin', () => {
    cy.visit('https://admin-dev.card4games.com/auth/login');
    cy.get('[name="email"]').should('be.visible').clear().type(Cypress.env('adminEmail'));
    cy.get('[name="password"]').should('be.visible').clear().type(Cypress.env('adminPassword'), { log: false });
    cy.get('button.ng-star-inserted').click();

    cy.log('⏳ Waiting 10 seconds for manual OTP entry...');
    cy.wait(10000);
});

Cypress.Commands.add('loginStoreUI', () => {
    cy.visit('/');
    cy.get('.d-flex.ng-star-inserted > .dropdown > [name="parentlogin"]').click();
    cy.get('.d-flex.ng-star-inserted > .dropdown > .dropdown-nav > .login-list > [name="login"]').click();
    cy.get('.p-inputgroup > .p-inputtext').should('be.visible').clear().type(Cypress.env('storeEmail'));
    cy.get('.position-relative > .p-inputtext')
        .should('be.visible')
        .clear()
        .type(Cypress.env('storePassword'), { log: false });
    cy.get('[name="login"] > .mb-3').click();
    cy.get('.accept-btn').click();
});
