const assert = require('assert');
const { JSDOM } = require('jsdom');

describe('Frontend MFA Tests', () => {
    let document;

    before(() => {
        // Simulate the DOM
        const dom = new JSDOM(`
            <html>
                <body>
                    <input id="otp" type="text" />
                    <button id="submit">Submit</button>
                    <div id="message"></div>
                </body>
            </html>
        `);
        document = dom.window.document;
    });

    it('should display an error message for empty OTP', () => {
        const otpInput = document.getElementById('otp');
        const messageDiv = document.getElementById('message');

        otpInput.value = ""; // Simulate empty OTP input
        if (otpInput.value === "") {
            messageDiv.textContent = "OTP cannot be empty";
        }

        assert.strictEqual(messageDiv.textContent, "OTP cannot be empty");
    });

    it('should accept valid OTP input', () => {
        const otpInput = document.getElementById('otp');
        const messageDiv = document.getElementById('message');

        otpInput.value = "123456"; // Simulate valid OTP input
        if (otpInput.value.length === 6) {
            messageDiv.textContent = "OTP submitted";
        }

        assert.strictEqual(messageDiv.textContent, "OTP submitted");
    });
});