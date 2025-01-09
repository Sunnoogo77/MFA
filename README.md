# Multi-Factor Authentication (MFA) Project

## Description
Ce projet implémente un système d'authentification multifactorielle (MFA) basé sur Node.js, Express, Passport.js, Speakeasy (pour la 2FA), et un frontend développé en React. Le MFA renforce la sécurité en exigeant deux étapes d'authentification : un mot de passe et un code 2FA.

## Fonctionnalités principales
- Création d'un compte utilisateur avec 2FA.
- Authentification sécurisée via un mot de passe et un code généré par une application comme Google Authenticator.
- Gestion des sessions utilisateurs.
- Intégration du backend (Node.js) et frontend (React).

## Structure du projet
```
backend/ : Contient le serveur Node.js avec Passport.js et Speakeasy pour gérer la 2FA.
client/ : Contient l'application React pour l'interface utilisateur.
```

## Prérequis
- Node.js et npm installés sur votre machine.
- Une application de génération de code 2FA (Google Authenticator, Authy, etc.).

## Installation
### Étape 1 : Clonez le repository
```bash
git clone https://github.com/Sunnoogo77/MFA.git
cd MFA
```

### Étape 2 : Installation des dépendances
#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd client
npm install
```

### Étape 3 : Lancement du projet
#### Backend
```bash
cd backend
npm start
```

#### Frontend
```bash
cd client
npm start
```

### Étape 4 : Utilisation
- Inscrivez-vous et configurez la 2FA.
- Testez le système d'authentification.

## Technologies utilisées
- **Backend** : Node.js, Express, Passport.js, Speakeasy
- **Frontend** : React, Axios
- **Outils supplémentaires** : Git, VS Code

## Auteur
Créé par [Ton nom ou pseudo]. N'hésitez pas à me contacter sur LinkedIn pour toute question ou collaboration.
```
