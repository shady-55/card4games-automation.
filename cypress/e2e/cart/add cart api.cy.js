/// <reference types="cypress" />

describe('Cart API - Quantity Validation', () => {
    let authToken = '';
    const apiKey = Cypress.env('API_KEY') || 'YOUR_API_KEY';
    const productId = '679f2c3b3060473ee54ccaf7';

    before(() => {
        // تسجيل الدخول لجلب التوكن
        cy.request({
            method: 'POST',
            url: 'https://api-dev.card4games.com/v1/auth/signin',
            headers: { apiKey: apiKey },
            body: {
                email: Cypress.env('email') || 'vilalo@fxzig.com',
                password: Cypress.env('password') || 'Shady112200#'
            }
        }).then((response) => {
            cy.getCookie('token').then((cookie) => {
                if (cookie) {
                    authToken = cookie.value;
                } else if (response.body && response.body.token) {
                    authToken = response.body.token;
                } else if (response.headers['set-cookie']) {
                    const tokenCookie = response.headers['set-cookie'].find((c) => c.includes('token='));
                    if (tokenCookie) authToken = tokenCookie.split('token=')[1].split(';')[0];
                }
            });
        });
    });

    // 1. اختبار الكميات المسموحة (أقل من أو يساوي 20) هيرجع 200
    const validQuantities = [2, 19, 20];

    validQuantities.forEach((qty) => {
        it(`should return 200 when quantity is ${qty} (<= 20)`, () => {
            cy.request({
                method: 'PATCH',
                url: 'https://api-dev.card4games.com/v1/cart/',
                failOnStatusCode: false,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': apiKey,
                    Cookie: `token=${authToken}`
                },
                body: {
                    products: [
                        {
                            product: productId,
                            quantity: qty,
                            rangePrice: 0,
                            userInputs: null
                        }
                    ],
                    esim_data: []
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.products[0].quantity).to.eq(qty, 'Quantity updated successfully');
            });
        });
    });

    // 2. اختبار الكميات المرفوضة (أكبر من 20) هيرجع 400
    const invalidQuantities = [21, 29];

    invalidQuantities.forEach((qty) => {
        it(`should return 400 when quantity is ${qty} (> 20)`, () => {
            cy.request({
                method: 'PATCH',
                url: 'https://api-dev.card4games.com/v1/cart/',
                failOnStatusCode: false,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': apiKey,
                    Cookie: `token=${authToken}`
                },
                body: {
                    products: [
                        {
                            product: productId,
                            quantity: qty,
                            rangePrice: 0,
                            userInputs: null
                        }
                    ],
                    esim_data: []
                }
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq('Quantity is greater than allowed range');
            });
        });
    });
});
