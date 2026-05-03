/// <reference types="cypress" />

describe('Login API (EgyCards)', () => {

  it('should login successfully via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-dev.card4games.com/v1/auth/signin',
      headers: {
        apiKey: 'YOUR_API_KEY',
      },
      body: {
        email: 'vilalo@fxzig.com',
        password: 'Shady112200#'
      },
      failOnStatusCode: false
    }).then((response) => {
      // 1. طباعة الاستجابة
      cy.log(JSON.stringify(response.body));
      console.log('FULL RESPONSE BODY = ', response.body);

      // 2. التأكد من حالة الاستجابة
      expect(response.status).to.eq(201);

      // 3. قراءة الـ Cookie الخاصة بالتوكن
      cy.getCookie('token').then((cookie) => {
        if (cookie) {
          cy.log('Token: ' + cookie.value);
          console.log('Token:', cookie.value);
        } else {
          cy.log('Token cookie not found in browser');
        }
      });
    });
  });

  it('should not login with wrong credentials via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-dev.card4games.com/v1/auth/signin',
      headers: {
        apiKey: 'YOUR_API_KEY',
      },
      body: {
        email: 'vilalo@fxzig.com',
        password: 'WrongPassword123'
      },
      failOnStatusCode: false
    }).then((response) => {
      // التأكد من فشل تسجيل الدخول (Status Code 400, 401, etc.)
      expect(response.status).to.not.eq(201);
      expect(response.status).to.be.oneOf([400, 401, 403, 404, 422]);
    });
  });

  it('should fail when email is missing', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-dev.card4games.com/v1/auth/signin',
      headers: {
        apiKey: 'YOUR_API_KEY',
      },
      body: {
        password: 'Shady112200#'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.not.eq(201);
    });
  });

});
