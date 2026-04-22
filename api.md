# 🚀 AI Job Outreach API Documentation

## 🔐 Authentication

### POST /api/auth/register

Register a new user

**Request**

```json
{
  "name": "Praba",
  "email": "user@example.com",
  "password": "123456"
}
```

---

### POST /api/auth/login

Login user

**Response**

```json
{
  "token": "jwt_token"
}
```

---

## 👤 User Profile

### GET /api/user/me

Get current user profile

**Headers**

```
Authorization: Bearer <token>
```

---

### PUT /api/user/me

Update user profile

**Request**

```json
{
  "name": "Updated Name",
  "skills": ["Node.js", "MongoDB"]
}
```

---

### DELETE /api/user/me

Delete user account

---

## 📄 Onboarding

### POST /api/user/onboarding

Upload resume and analyze

**Form Data**

```
resume: file (PDF)
skills: string (optional)
```

---

## 📊 Dashboard

### GET /api/dashboard

**Response**

```json
{
  "user": {
    "name": "Praba",
    "analysis": {
      "score": 78,
      "missingSkills": ["Redis"],
      "suggestions": ["Add backend scaling"]
    }
  }
}
```

---

## ✉️ Email Generator

### POST /api/email/generate

**Request**

```json
{
  "jobRole": "Backend Developer",
  "company": "Amazon",
  "jobDescription": "Optional"
}
```

**Response**

```json
{
  "email": "Generated professional email..."
}
```

---

## 🔒 Authentication

All protected routes require:

```
Authorization: Bearer <token>
```

---

## 🧠 Notes

- Resume must be PDF
- AI analysis runs during onboarding
- Email generation uses AI context

## Auther

- Prabanjan
- Software Engineer
  [Github](https://www.github.com/prabasjani)
