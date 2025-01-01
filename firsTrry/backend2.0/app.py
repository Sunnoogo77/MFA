from flask import Flask, request, jsonify
import pyotp
import qrcode
import io
from secrets_manager import save_secret, get_secret

app = Flask(_name_)

# Generate QR Code as a PNG image
def generate_qr_code(uri):
    img = qrcode.make(uri)
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)
    return buffer

@app.route('/setup-mfa', methods=['POST'])
def setup_mfa():
    """Endpoint to generate a secret and QR code for MFA setup"""
    user_id = request.json.get("user_id")
    if not user_id:
        return jsonify({"error": "Missing user_id"}), 400

    # Generate a TOTP secret for the user
    secret = pyotp.random_base32()
    save_secret(user_id, secret)  # Save the secret securely

    # Generate a provisioning URI and QR code
    totp = pyotp.TOTP(secret)
    uri = totp.provisioning_uri(name=f"user:{user_id}", issuer_name="MFA-Project")
    qr_code = generate_qr_code(uri)

    return (
        qr_code.read(),
        200,
        {'Content-Type': 'image/png'}
    )

@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    """Endpoint to verify the OTP entered by the user"""
    user_id = request.json.get("user_id")
    otp = request.json.get("otp")

    if not user_id or not otp:
        return jsonify({"error": "Missing user_id or otp"}), 400

    # Retrieve the user's secret
    secret = get_secret(user_id)
    if not secret:
        return jsonify({"error": "Secret not found for user"}), 404

    # Verify the OTP
    totp = pyotp.TOTP(secret)
    if totp.verify(otp):
        return jsonify({"success": "OTP is valid"}), 200
    else:
        return jsonify({"error": "Invalid OTP"}), 401

if _name_ == "_main_":
    app.run(debug=True)