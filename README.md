<p align="center">
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=github" alt="Build Passing" />
  <img src="https://img.shields.io/badge/License-ISC-green?style=for-the-badge" alt="License ISC" />
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" />
</p>

# 🚀 HireNova: AI-Powered Interview Excellence


HireNova is a cutting-edge, AI-driven platform designed to streamline the recruitment process. By leveraging the power of Google's Gemini AI, HireNova provides personalized interview reports, resume analysis, and job description mapping, helping both candidates and recruiters achieve better outcomes.

---

## 🌟 Key Features

- **🧠 AI-Driven Interview Analysis**: Generate comprehensive interview reports based on user self-descriptions, uploaded resumes, and specific job descriptions.
- **📄 Precise Resume Parsing**: Automatically extract and analyze content from PDF resumes using advanced parsing techniques.
- **📑 Automated Report Generation**: Create professional PDF interview reports and summarized resumes at the click of a button.
- **🔐 Secure Authentication**: Robust user authentication system featuring JWT-based session management and token blacklisting for enhanced security.
- **📊 User Dashboard**: Maintain a history of all generated reports and track progress over time.

---

## 🛠️ Technical Stack

### **Frontend**
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Sass](https://sass-lang.com/) (SCSS)
- **API Client**: Axios

### **Backend**
- **Runtime**: Node.js
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **AI Integration**: [Google Gemini AI (SDK)](https://ai.google.dev/)
- **PDF Generation**: [Puppeteer](https://pptr.dev/)
- **File Handling**: Multer & pdf-parse
- **Validation**: [Zod](https://zod.dev/)

---

## 📂 Project Structure

```text
HireNova/
├── Frontend/           # React + Vite Application
│   ├── src/
│   │   ├── features/   # Feature-based architecture (Auth, Dashboard, etc.)
│   │   ├── hooks/      # Custom React hooks
│   │   └── services/   # API abstraction layer
│   └── public/
└── Backend/            # Node.js + Express API
    ├── src/
    │   ├── controllers/# Business logic
    │   ├── models/     # Mongoose schemas
    │   ├── routes/     # Express API endpoints
    │   ├── services/   # External integrations (AI, PDF)
    │   └── middlewares/# Auth & validation
    └── .env            # Environment configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- Google Gemini API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/HireNova.git
   cd HireNova
   ```

2. **Backend Setup**:
   ```bash
   cd Backend
   npm install
   ```
   - Create a `.env` file in the `Backend` directory:
     ```env
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GEMINI_API_KEY=your_gemini_api_key
     ```

3. **Frontend Setup**:
   ```bash
   cd ../Frontend
   npm install
   ```

### Running the Application

1. **Start the Backend**:
   ```bash
   cd Backend
   npm run dev
   ```

2. **Start the Frontend**:
   ```bash
   cd Frontend
   npm run dev
   ```

---

## 🔗 API Overview

### Authentication
- `POST /api/auth/register` - Create a new account.
- `POST /api/auth/login` - Log in and receive a JWT.
- `POST /api/auth/logout` - Log out and invalidate the token.

### Interviews
- `POST /api/interview/` - Generate a new interview report (Requires resume upload).
- `GET /api/interview/` - List all reports for the logged-in user.
- `GET /api/interview/report/:interviewId` - Fetch details of a specific report.
- `POST /api/interview/resume/pdf/:reportId` - Generate a PDF summary of the interview.

---

## 📝 License

This project is licensed under the [ISC License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs or feature requests.

---

*Built with ❤️ by the HireNova Team*
