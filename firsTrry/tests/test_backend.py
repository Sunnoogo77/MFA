import unittest
from app import app
from secrets_manager import save_secret

class TestMFABackend(unittest.TestCase):

    def setUp(self):
        """Set up test client and sample data"""
        self.client = app.test_client()
        self.sample_user_id = "test_user"
        self.sample_secret = "JBSWY3DPEHPK3PXP"

        # Save a test secret
        save_secret(self.sample_user_id, self.sample_secret)

    def test_setup_mfa(self):
        """Test the /setup-mfa endpoint"""
        response = self.client.post('/setup-mfa', json={"user_id": "new_user"})
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'PNG', response.data[:10])  # Check if the response contains PNG data

    def test_verify_valid_otp(self):
        """Test OTP verification with a valid OTP"""
        from pyotp import TOTP
        totp = TOTP(self.sample_secret)
        valid_otp = totp.now()

        response = self.client.post('/verify-otp', json={
            "user_id": self.sample_user_id,
            "otp": valid_otp
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn("OTP is valid", response.get_json().get("success", ""))

    def test_verify_invalid_otp(self):
        """Test OTP verification with an invalid OTP"""
        response = self.client.post('/verify-otp', json={
            "user_id": self.sample_user_id,
            "otp": "123456"  # Invalid OTP
        })
        self.assertEqual(response.status_code, 401)
        self.assertIn("Invalid OTP", response.get_json().get("error", ""))

if _name_ == '_main_':
    unittest.main()