# 🔐 **Multi-Factor Authentication (MFA) Project**  



## 📖 **Overview**  

The **Multi-Factor Authentication (MFA)** system enhances security by requiring users to verify their identity using multiple authentication factors. This project implements a secure and scalable MFA solution using:  

- **Backend**: Node.js, Express, Passport.js, and Speakeasy for 2FA handling.  
- **Frontend**: React with Vite for an intuitive user interface.  

MFA strengthens access control by combining:  

1. **Something you know** – Password  
2. **Something you have** – 2FA code generated via Google Authenticator or Authy  

---  

## ✨ **Key Features**  

- 🔐 **Secure User Registration & Authentication** – Register users and protect access with 2FA.  
- 🕵️ **Session Management** – Secure handling of user sessions with Express sessions.  
- 📧 **Email Notifications** – (Future implementation) Notify users upon login attempts.  
- ⚙️ **API-First Approach** – Well-defined API endpoints for smooth integration.  
- 🌐 **Cross-Origin Compatibility** – Secure communication between frontend and backend.  

---  

## 📂 **Project Structure**  

```plaintext
MFA-Project/
├── backend/                  # Node.js backend with Express and Passport.js  
│   ├── config/                # Configuration files (DB, passport, etc.)  
│   ├── controllers/           # Business logic for authentication  
│   ├── models/                # Database schemas  
│   ├── routes/                # API endpoints  
│   ├── utils/                 # Utility functions  
│   ├── index.js               # Main server file  
│   ├── package.json           # Backend dependencies  
│   └── .env.example           # Environment variable example file  
├── client/                   # React frontend with Vite  
│   ├── src/                    # Frontend source code  
│   ├── public/                 # Static assets  
│   ├── package.json            # Frontend dependencies  
│   └── .env.example             # Environment variables for frontend  
└── README.md                 # Project documentation  
```  

---  

## 🛠️ **Prerequisites**  

Make sure you have the following installed:  

- [Node.js](https://nodejs.org/) (v16 or later)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- A 2FA code generator app (e.g., Google Authenticator, Authy)  

---  

## 🚀 **Installation**  

Follow these steps to set up the project on your local environment.  

### **Step 1: Clone the Repository**  

```bash
git clone https://github.com/Sunnoogo77/MFA.git
cd MFA
```  

### **Step 2: Install Dependencies**  

#### Backend Setup  
```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
```

#### Frontend Setup  
```bash
cd client
npm install
cp .env.example .env  # Configure environment variables
```  

### **Step 3: Run the Project**  

#### Start Backend  
```bash
cd backend
npm start
```

#### Start Frontend  
```bash
cd client
npm start
```  

---  

## 🖥️ **Usage Instructions**  

1. **Register a User:**  
   - Navigate to the registration page.  
   - Provide username and password.  
   - Scan the QR code using Google Authenticator.  

2. **Login Process:**  
   - Enter your credentials.  
   - Provide the 2FA token from the authenticator app.  

3. **Session Management:**  
   - Logout securely to end the session.  

---  

## 📡 **API Endpoints Overview**  

Here are some key API endpoints you can test:  

| Method | Endpoint                  | Description                          | Example Input               |  
|--------|---------------------------|--------------------------------------|------------------------------|  
| POST   | `/api/auth/register`        | Register a new user                  | `{ "username": "user", "password": "pass123" }` |  
| POST   | `/api/auth/login`           | User login with password and 2FA     | `{ "username": "user", "password": "pass123" }` |  
| POST   | `/api/auth/2fa/setup`       | Generate QR code for 2FA setup        | Session cookie required       |  
| POST   | `/api/auth/2fa/verify`      | Verify the OTP code                   | `{ "token": "123456" }`       |  
| POST   | `/api/auth/logout`          | Logout the current user               | Session cookie required       |  

---  

## 🛠 **Technologies Used**  

### **Backend**  
- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Lightweight and fast backend framework  
- **Passport.js** – Authentication middleware  
- **Speakeasy** – TOTP-based 2FA generation  
- **MongoDB/MariaDB** – Flexible database storage  

### **Frontend**  
- **React** – Modern JavaScript UI framework  
- **Vite** – Fast development build tool  
- **Axios** – Promise-based HTTP client  

---  
 

## 🙌 **Acknowledgements**  

Special thanks to:  

- [Dipesh Malvia](https://www.youtube.com/@dipeshmalvia) for insightful tutorials on MFA implementation.  
- The open-source community for providing useful resources and libraries.  

---  

## 📝 **License**  

This project is licensed under the MIT License – feel free to modify and improve it.  

