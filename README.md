# 🔗 URL Shortener

A full-stack URL shortener built with Node.js, Express, MongoDB, and EJS — with user authentication and session management.

## ✨ Features

- 🔐 User signup and login with session-based authentication
- 🔗 Generate short URLs from long ones
- 🚀 Redirect to original URL via short link
- 📊 Track visit history with timestamps
- 👤 Each user sees only their own URLs
- 🎨 Dark themed UI with ambient glow

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Templating:** EJS
- **Auth:** UUID-based session management with cookies
- **Styling:** Custom dark CSS

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB running locally

### Installation

```bash
git clone https://github.com/RajnishMittal/url_shortner.git
cd url_shortner
npm install
```

### Run

```bash
node index.js
```

Server starts at **http://localhost:8001**

## 📌 Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Homepage with URL list |
| GET | /signup | Signup page |
| GET | /login | Login page |
| POST | /user | Register new user |
| POST | /user/login | Login user |
| POST | /url | Generate a short URL |
| GET | /url/:shortId | Redirect to original URL |
| GET | /url/analytics/:shortId | Get click analytics |

## 📬 Example

### Generate Short URL
POST /url
Body: url = https://www.youtube.com

### Redirect
GET /url/XNjcErY0 → redirects to https://www.youtube.com

### Analytics
GET /url/analytics/XNjcErY0
→ { "Total_Clicks": 5, "Analytics": [...] }

## 📁 Project Structure
project_1/
├── controllers/
│   ├── urls.js
│   └── user.js
├── middleware/
│   └── auth.js
├── model/
│   ├── url.js
│   └── user.js
├── public/
│   └── style.css
├── routes/
│   ├── staticUrl.js
│   ├── url.js
│   └── user.js
├── services/
│   └── auth.js
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── connection.js
└── index.js

