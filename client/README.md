# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



---
# Frontend - Multi-Factor Authentication (MFA)

## Description
Ce répertoire contient le code de l'application frontend pour l'interface utilisateur. Il permet :
- L'inscription des utilisateurs.
- La connexion avec un mot de passe et un code 2FA.

## Technologies utilisées
- React.js
- Axios

## Architecture
- `components/`: Composants React réutilisables.
- `pages/`: Pages principales de l'application.
- `utils/`: Contient des fonctions utilitaires (par ex., appels API).

## Installation
1. Allez dans le répertoire client :
   ```bash
   cd client
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm start
   ```

## Points importants
- Intégration avec le backend pour la 2FA.
- Gestion de l'état avec React.
