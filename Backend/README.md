# 🖥️ HireNova Backend (interview-ai)

This directory contains the backend API for HireNova, an AI-powered interview platform built with Node.js and Express.

---

## 🛠️ Features

- **🛡️ JWT Authentication**: Secure user login and registration with token blacklisting.
- **🤖 Gemini AI Integration**: Automated interview report generation based on JD and resumes.
- **📁 File Handling**: Multer for PDF uploads and pdf-parse for content extraction.
- **📄 PDF Generation**: Puppeteer-powered PDF reports and summaries.
- **✅ Validation**: Zod-based request validation for robust API handling.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file based on the local setup:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_gemini_api_key
   ```

3. **Run in Development**:
   ```bash
   npm run dev
   ```

---

## 📂 Backend Structure

- `src/controllers/`: API route handlers.
- `src/models/`: Mongoose schemas.
- `src/routes/`: Express route definitions.
- `src/services/`: AI and PDF generation services.
- `src/middlewares/`: Auth and file handling middlewares.
- `src/config/`: Database and environment configurations.

---

## 🔗 Key API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/interview/` (Requires resume upload)
- `GET /api/interview/report/:id`

---

*For full project documentation, refer to the [Root README](../README.md).*
