<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS Badge">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Badge">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge">
</p>

# 🚀 AI ChatBot: Modern Web Application

A cutting-edge **AI-powered chatbot** built with a modern web stack: **React + Vite** for the frontend, robust **Firebase Authentication**, and a custom **Node.js/Express** server for AI integration.

### **✨ Key Highlights**

* **Secure Authentication:** Email/Password and Google Sign-In.
* **Protected Routing:** Ensures only authenticated users access the chat.
* **Sleek UI:** Fully responsive design using **TailwindCSS**.

---

<p align="center">
  <img src="./public/ChatBotImage.png" alt="A high-quality screenshot or demo GIF of the AI Chatbot interface" width="800"/>
  <br>
  *Demo Image of the Chatbot Interface*
</p>

---

## ✅ Core Features

| Category | Feature | Implementation Details | Status |
| :--- | :--- | :--- | :--- |
| **Authentication** | User Signup/Login | Email/Password using Firebase Auth | ✔️ |
| **Social Login** | Google Sign-In | `signInWithRedirect()` for seamless experience | ✔️ |
| **Security** | Protected Routes | Implemented via React Router + Context API | ✔️ |
| **Frontend** | Responsive Design | Styled with the utility-first **TailwindCSS** | ✔️ |
| **Architecture** | State Persistence | Uses `onAuthStateChanged()` for state reliability | ✔️ |
| **Backend** | Node.js Server | Custom Express server for future AI API calls | 🔜 |

---

## 💻 Tech Stack

This project leverages the following technologies:

### 🌟 Frontend
* **React** (Vite Setup)
* **TailwindCSS**
* **Context API** (Global State)
* **Firebase Authentication** (Client-side Auth)

### ⚙️ Backend
* **Node.js**
* **Express**

---

## 📂 Project Structure Overview

The project is divided into clean, logical segments for easy navigation and maintenance.

ChatBot/ │── backend/ │ └── server/index.js # Custom Node.js/Express Server │ │── src/ │ ├── components/ # All UI components (Login, Navbar, Home, etc.) │ ├── contexts/ │ │ └── authContext.jsx # Auth Provider for global state │ ├── firebase/ │ │ ├── auth.js # Firebase auth method wrappers │ │ └── firebase.js # Firebase initialization │ ├── App.jsx │ └── main.jsx │ ├── .env # Environment variables (MUST be ignored) ├── package.json └── README.md


---

## 🔑 Environment Variables Setup

You must create a `.env` file in the project root directory to configure Firebase:

```bash
# .env file content (for Vite)

VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
⚠️ IMPORTANT: For security, ensure this .env file is listed in your .gitignore and is never pushed to your public repository.

🛠️ Getting Started
Follow these simple steps to get the project running locally.

Step 1: Clone the repository
Bash

git clone [https://github.com/Akshay1267/AI-ChatBot.git](https://github.com/Akshay1267/AI-ChatBot.git)
cd AI-ChatBot
Step 2: Install dependencies
Install all necessary packages for the frontend (React/Vite):

Bash

npm install
Step 3: Start the frontend server
Bash

npm run dev
The application should now be running at http://localhost:5173 (or similar port).

🧪 Step 4: Running the Backend (Optional)
To start the Node.js Express server:

Bash

cd backend
npm install
node server/index.js
🛡️ Authentication Flow
The authentication system is designed for security and a smooth user experience:

User Login: Supports both Email/Password and Google Sign-In.

State Listener: onAuthStateChanged() listens for auth state changes and updates the global AuthContext.

Route Protection: Any route wrapped by the protection logic redirects unauthenticated users to the login page using <Navigate />.

🚀 Deployment
The project is ready for production. Generate the optimized build using:

Bash

npm run build
The resulting dist folder can be deployed instantly on modern static site hosts:

Vercel

Netlify

Firebase Hosting

🤝 Contributing
We welcome contributions of all kinds!

Fork the Project.

Create your Feature Branch (git checkout -b feature/NewFeature).

Commit your Changes (git commit -m 'Add New Feature').

Push to the Branch (git push origin feature/NewFeature).

Open a Pull Request.

⭐ Show Your Support
If this project helps you or if you simply liked the code, please give the repository a star!

<p align="center"> <a href="https://www.google.com/search?q=https://github.com/Akshay1267/AI-ChatBot"> <img src="https://www.google.com/search?q=https://img.shields.io/badge/GitHub-Star_The_Repo-yellow%3Fstyle%3Dfor-the-badge%26logo%3Dgithub" alt="Star the Repo Badge"> </a> </p>
