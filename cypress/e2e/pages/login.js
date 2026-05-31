class LoginPage {
    load() {
        cy.visit('/');
    }

    enterEmail(email) {
        cy.get('.p-inputgroup > .p-inputtext').type(email);
    }

    enterPassword(password) {
        cy.get('.position-relative > .p-inputtext').type(password);
    }

    clickLogin() {
        cy.get('[name="login"] > .mb-3').click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }
}

export default LoginPage;
