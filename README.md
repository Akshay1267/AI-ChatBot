# 🚀 AI ChatBot

A modern AI-powered chatbot built using **React + Vite**, **Firebase Authentication**, and a custom **Node.js backend**.
Includes features like Email/Password login, Google Sign-In, protected routes, and a clean UI using TailwindCSS.

---

## 📌 FEATURES

✔️ User Authentication (Email/Password)  
✔️ Google Sign-In (Firebase Auth)  
✔️ Protected Routes using React Router + Context API  
✔️ Responsive UI with TailwindCSS  
✔️ Logout + State Persistence  
✔️ Reusable Components  
✔️ Node.js Backend (future AI integration)  
✔️ Clean project structure  

---

## 📁 FOLDER STRUCTURE

ChatBot/
│── backend/
│ └── server/index.js
│
│── public/
│ └── ChatBotImage.png
│
│── src/
│ ├── assets/
│ ├── components/
│ │ ├── Footer.jsx
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Main.jsx
│ │ ├── Navbar.jsx
│ │ └── SignUp.jsx
│ │
│ ├── contexts/
│ │ └── authContext.jsx
│ │
│ ├── firebase/
│ │ ├── auth.js
│ │ └── firebase.js
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── .env (NOT PUSHED TO GITHUB)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

yaml
Copy code

---

## 🔧 TECH STACK

**Frontend:**  
* React  
* Vite  
* TailwindCSS  
* Context API  
* Firebase Auth  

**Backend:**  
* Node.js  
* Express  

---

## 🔑 ENVIRONMENT VARIABLES (.env)

Create a `.env` file in root:

VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id

yaml
Copy code

⚠️ Do NOT push `.env` to GitHub.

---

## 📦 INSTALLATION

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Akshay1267/AI-ChatBot.git
cd AI-ChatBot
2️⃣ Install dependencies
sh
Copy code
npm install
3️⃣ Start the development server
sh
Copy code
npm run dev
🧪 RUNNING BACKEND (OPTIONAL)
sh
Copy code
cd backend
npm install
node server/index.js
🔐 AUTHENTICATION
This project supports:
✔ Email & Password login
✔ Google Sign-In using signInWithRedirect()
✔ Automatic auth state using onAuthStateChanged()
✔ Protected routes using <Navigate />

🚀 DEPLOYMENT
You can deploy using:

Vercel

Netlify

Firebase Hosting

Just run:

sh
Copy code
npm run build
🤝 CONTRIBUTING
Pull requests are welcome! If you want new features, open an issue.

⭐ SHOW SUPPORT
If you liked this project, please ⭐ the repo!

pgsql
Copy code

✅ All major headings now appear bigger and more prominent.  

If you want, I can **also add a super visually appealing version** with **even larger headings, badges, and a demo GIF** for maximum impact.  

Do you want me to do that?
