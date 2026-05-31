// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
// طباعة أي console.error في الكونسول
Cypress.on('window:before:load', (win) => {
    // التقاط console.error
    cy.spy(win.console, 'error').as('consoleError');
    // التقاط console.warn
    cy.spy(win.console, 'warn').as('consoleWarn');
});

// التقاط جميع طلبات الـ API وعرض الأخطاء في الشاشة (Cypress Log) والتيرمنال
beforeEach(() => {
    cy.intercept('**', (req) => {
        req.continue((res) => {
            if (res.statusCode >= 400) {
                // استخراج رسالة الخطأ من جسم الاستجابة (Response Body)
                let errorMsg = 'No details';
                if (res.body) {
                    if (typeof res.body === 'string') {
                        errorMsg = res.body;
                    } else if (typeof res.body === 'object') {
                        errorMsg =
                            res.body.message ||
                            res.body.error ||
                            res.body.messageAr ||
                            res.body.messageEn ||
                            (res.body.errors ? JSON.stringify(res.body.errors) : JSON.stringify(res.body));
                    }
                }

                // طباعة الخطأ في كونسول Cypress (Command Log) لكي يظهر على الشاشة أثناء التست
                Cypress.log({
                    name: '❌ API ERROR',
                    displayName: `API ERROR [${res.statusCode}]`,
                    message: `${req.method} ${req.url} -> ${errorMsg}`,
                    consoleProps: () => ({
                        'Request URL': req.url,
                        'Request Method': req.method,
                        'Status Code': res.statusCode,
                        'Request Body': req.body,
                        'Response Body': res.body
                    })
                });

                // طباعة الخطأ في التيرمنال مباشرة عبر الخادم المحلي
                logToTerminal(
                    `\n>>> ❌ API ERROR [${res.statusCode}]: ${req.method} ${req.url}\n>>> Error Details: ${errorMsg}\n`
                );
            }
        });
    });
});

// التقاط أي uncaught exception عشان التست ما يفشلش
Cypress.on('uncaught:exception', (err, runnable) => {
    Cypress.log({
        name: '❌ UNCAUGHT ERROR',
        message: err.message,
        consoleProps: () => ({ error: err, test: runnable.title })
    });

    // طباعة الخطأ في التيرمنال
    logToTerminal(`\n>>> ⚠️ UNCAUGHT EXCEPTION IN APP: "${runnable.title}"\n>>> Error Message: ${err.message}\n`);

    // return false عشان التست يكمل ومايفشلش
    return false;
});

// دالة إرسال السجلات للتيرمنال مباشرة عبر fetch لعدم تعطيل طابور أوامر Cypress
function logToTerminal(message) {
    fetch('http://127.0.0.1:22123', {
        method: 'POST',
        body: message,
        headers: { 'Content-Type': 'text/plain' }
    }).catch(() => {});
}

// التقاط فشل الاختبار وطباعته في التيرمنال
Cypress.on('fail', (err, runnable) => {
    // طباعة الخطأ في التيرمنال
    logToTerminal(`\n>>> ❌ TEST FAILED: "${runnable.title}"\n>>> Error Message: ${err.message}\n`);

    // عمل throw للخطأ حتى يفشل الاختبار بالشكل الصحيح في cypress
    throw err;
});
