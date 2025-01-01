import os
from cryptography.fernet import Fernet

# Simulated in-memory database for secrets (replace with a real database in production)
SECRETS_DB = {}

# Generate a key for encrypting secrets (you should store this securely)
ENCRYPTION_KEY = Fernet.generate_key()
cipher = Fernet(ENCRYPTION_KEY)

def save_secret(user_id, secret):
    """Encrypt and save the user's TOTP secret"""
    encrypted_secret = cipher.encrypt(secret.encode())
    SECRETS_DB[user_id] = encrypted_secret

def get_secret(user_id):
    """Retrieve and decrypt the user's TOTP secret"""
    encrypted_secret = SECRETS_DB.get(user_id)
    if not encrypted_secret:
        return None
    return cipher.decrypt(encrypted_secret).decode()