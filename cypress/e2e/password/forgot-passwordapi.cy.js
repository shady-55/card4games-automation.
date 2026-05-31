it('API forgot password (EgyCards)', () => {
    cy.request({
        method: 'POST',
        url: 'https://api-dev.card4games.com/v1/auth/forgot-password',
        headers: {
            apiKey: 'YOUR_API_KEY'
        },
        body: {
            email: 'shadymesho297+2@gmail.com'
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        //xpect(response.body.message).to.eq('Password reset email sent successfully');
    });
});
