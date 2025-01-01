# Manual Test Plan: MFA Project

## Overview
This document outlines the manual test cases for verifying the functionality of the Multi-Factor Authentication (MFA) system. Each test case specifies the steps, expected results, and actual outcomes during testing.

---

## Test Cases

### *TC001: Verify QR Code Generation*
- *Description*: Ensure that the system generates a valid QR code during the MFA setup process.
- *Preconditions*: The user is logged into their account and has navigated to the MFA setup page.
- *Steps to Test*:
  1. Click on the "Enable MFA" button.
  2. Observe the QR code generated on the setup page.
  3. Scan the QR code using the Google Authenticator or any TOTP app.
- *Expected Result*:
  - A scannable QR code is displayed.
  - The app adds the account with a valid OTP generator.
- *Status*: [Pass/Fail]

---

### *TC002: Verify OTP Validation*
- *Description*: Ensure the backend correctly validates a valid OTP from the TOTP app.
- *Preconditions*: The user has completed the QR code setup and has a working TOTP app.
- *Steps to Test*:
  1. Open the TOTP app (e.g., Google Authenticator).
  2. Retrieve the current OTP displayed.
  3. Enter the OTP into the input field on the website.
  4. Submit the OTP for verification.
- *Expected Result*:
  - The OTP is validated successfully.
  - The user is redirected to the dashboard or shown a success message.
- *Status*: [Pass/Fail]

---

### *TC003: Reject Expired OTP*
- *Description*: Ensure that an expired OTP is rejected by the backend.
- *Preconditions*: The user has completed MFA setup and has access to the TOTP app.
- *Steps to Test*:
  1. Wait for the current OTP in the TOTP app to expire (after 30 seconds).
  2. Enter the expired OTP into the input field on the website.
  3. Submit the OTP for verification.
- *Expected Result*:
  - The OTP is rejected.
  - The user sees an appropriate error message (e.g., "OTP expired, please try again").
- *Status*: [Pass/Fail]

---

### *TC004: Reject Incorrect OTP*
- *Description*: Ensure the backend rejects an invalid OTP.
- *Preconditions*: The user has completed MFA setup and has access to the TOTP app.
- *Steps to Test*:
  1. Open the TOTP app and note the current OTP.
  2. Modify the OTP by changing one or more digits (e.g., instead of 123456, enter 123457).
  3. Enter the incorrect OTP into the input field on the website.
  4. Submit the OTP for verification.
- *Expected Result*:
  - The OTP is rejected.
  - The user sees an appropriate error message (e.g., "Invalid OTP, please try again").
- *Status*: [Pass/Fail]

---

### *TC005: Test OTP Resynchronization*
- *Description*: Ensure the backend can handle slight time drifts between the server and the user’s device.
- *Preconditions*: The user has completed MFA setup and has access to the TOTP app.
- *Steps to Test*:
  1. Open the TOTP app and wait until the OTP changes to a new value.
  2. Immediately enter the previous OTP into the input field on the website (within a 30-second tolerance window).
  3. Submit the OTP for verification.
- *Expected Result*:
  - The OTP is accepted if it falls within the resynchronization window (e.g., ±30 seconds).
- *Status*: [Pass/Fail]

---

### *TC006: Test Rate Limiting*
- *Description*: Ensure the system prevents brute force attacks by limiting OTP verification attempts.
- *Preconditions*: The user has completed MFA setup.
- *Steps to Test*:
  1. Enter an invalid OTP multiple times (e.g., 5 consecutive attempts).
  2. Observe the system’s response after the maximum allowed attempts.
- *Expected Result*:
  - The system temporarily blocks further attempts (e.g., "Too many failed attempts, please try again later").
- *Status*: [Pass/Fail]

---

### *TC007: Ensure Secure Secret Storage*
- *Description*: Verify that the TOTP secret keys are stored securely in the database.
- *Preconditions*: Access to the database is required.
- *Steps to Test*:
  1. Navigate to the database and locate the table storing the secrets.
  2. Check if the secrets are encrypted (not stored as plain text).
- *Expected Result*:
  - TOTP secrets are encrypted using a secure encryption algorithm.
- *Status*: [Pass/Fail]

---

### *TC008: Test UI Responsiveness*
- *Description*: Ensure the frontend UI for OTP entry works correctly across devices (desktop, tablet, mobile).
- *Preconditions*: Access to multiple devices or browser simulation tools.
- *Steps to Test*:
  1. Open the MFA OTP entry page on different devices or use a browser’s responsive design mode.
  2. Check if the input field, buttons, and messages display correctly.
- *Expected Result*:
  - The UI is responsive and user-friendly on all devices.
- *Status*: [Pass/Fail]

---

### *TC009: Simulate Complete Workflow*
- *Description*: Verify the end-to-end MFA setup and login process.
- *Preconditions*: A new user account.
- *Steps to Test*:
  1. Log in with a new account and enable MFA.
  2. Complete the setup by scanning the QR code and verifying the OTP.
  3. Log out and attempt to log in again using the OTP
   4. Enter the OTP from the TOTP app during the login process.
   5. Verify successful login after OTP validation.
- *Expected Result*:
  - The MFA setup completes successfully.
  - The user is able to log in with the correct OTP.
  - Incorrect or expired OTPs are rejected during login.
- *Status*: [Pass/Fail]

---

### *TC010: Test Error Handling*
- *Description*: Ensure the system provides clear error messages for various failure scenarios.
- *Preconditions*: Access to the MFA setup and login functionality.
- *Steps to Test*:
  1. Trigger an error scenario (e.g., enter an invalid OTP, attempt login with an expired OTP, or perform a failed QR code scan).
  2. Observe the error messages displayed to the user.
- *Expected Result*:
  - The system provides clear and user-friendly error messages (e.g., "Invalid OTP, please try again" or "QR code scan failed, please refresh the page").
- *Status*: [Pass/Fail]

---

### *TC011: Verify Logout Behavior*
- *Description*: Ensure the user is logged out completely and the MFA flow restarts during the next login attempt.
- *Preconditions*: The user is logged in and has enabled MFA.
- *Steps to Test*:
  1. Log out of the account.
  2. Attempt to log in again.
  3. Verify that the OTP verification is required after entering the username and password.
- *Expected Result*:
  - The user is logged out successfully.
  - MFA verification is required during the next login.
- *Status*: [Pass/Fail]

---

## Notes
- Mark the *Status* as Pass if the expected result matches the actual behavior.
- Mark the *Status* as Fail and document the observed result if it deviates from the expected behavior.
- If a test fails, log the issue in a bug-tracking tool or document it for debugging.

---

## Testing Environment
- *Browser*: Chrome, Firefox, Safari, Edge
- *Devices*: Desktop, Tablet, Mobile
- *Operating System*: Windows 10, macOS, Linux, Android, iOS
- *Database*: PostgreSQL/MySQL
- *Tools Used*: Postman (API testing), Browser Developer Tools (responsive testing), TOTP App (e.g., Google Authenticator)

---

## Summary
This document ensures all critical aspects of the MFA system are thoroughly tested, from setup to end-to-end workflows. It acts as a reference for ensuring high-quality, bug-free implementation.