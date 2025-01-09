# Backend - Multi-Factor Authentication (MFA)

## Description
Ce répertoire contient le code du backend de l'application MFA. Il gère :
- L'inscription et la connexion des utilisateurs.
- La configuration et la vérification de la 2FA.

## Technologies utilisées
- Node.js
- Express.js
- Passport.js
- Speakeasy

## Architecture
- `routes/`: Contient les routes pour l'authentification.
- `models/`: Contient les modèles de données.
- `config/`: Contient les configurations pour Passport.js et la base de données.

## Installation
1. Allez dans le répertoire backend :
   ```bash
   cd backend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez les variables d'environnement (exemple dans `.env.example`).
4. Lancez le serveur :
   ```bash
   npm start
   ```

## Points importants
- Utilisation de `Speakeasy` pour générer et vérifier les codes 2FA.
- Utilisation de `Passport.js` pour gérer les sessions utilisateur.
