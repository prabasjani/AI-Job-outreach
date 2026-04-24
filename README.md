# 🚀 AI Job Outreach SaaS

An AI-powered platform that helps job seekers analyze their resumes, identify skill gaps, and generate personalized job application emails.

---

## 🔥 Overview

Most job seekers apply blindly with generic resumes and emails, leading to low response rates.

This project solves that by combining:
- AI resume analysis
- Skill gap detection
- Personalized outreach email generation

---

## ✨ Features (V1 MVP)

### 🔐 Authentication
- Secure login & registration
- JWT-based authentication (HTTP-only cookies)

### 🧠 Resume Analysis
- Upload resume (PDF)
- ATS score evaluation
- Strengths & weaknesses detection
- Missing skills identification
- AI-powered suggestions

### 🎯 Onboarding System
- Collects user career goals
- Tailors analysis based on target role

### 📊 Dashboard
- Displays resume insights
- Shows improvement areas
- Clean SaaS UI

### ✉️ AI Email Generator
- Generate personalized job outreach emails
- Based on user profile + job role + company

### 👤 User Profile
- Update user details
- Delete account support

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### AI Integration
- OpenRouter API

---

## 🧱 Architecture

```txt
Frontend (React)
   ↓
Backend API (Express)
   ↓
Database (MongoDB)
   ↓
AI Service (OpenRouter)
```

### Clone the repo
```bash
git clone https://github.com/prabasjani/ai-job-outreach.git
cd ai-job-outreach
```

### Backend Setup
```bash
cd server
npm install
```

Create .env file

```env
NODE_ENV="development"
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
JWT_REFRESH_SECRET=your_secret
CLIENT_URL=http://localhost:5173
OPENROUTER_API_KEY=your_key
```

To Run the Server
```bash
npm start
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

---

## 🔐 Authentication Flow

>Login → Cookie set → Middleware verifies → Access protected routes

---

## 🤖 AI Assistance

This project was developed with the help of AI tools for productivity and development acceleration, including:

- ChatGPT (architecture guidance, debugging, and code assistance, AI-assisted development)

---

## 👨‍💻 Author

**Prabanjan ❤️**
AI-empowered Full Stack Developer

---



