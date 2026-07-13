# 🚀 AI JOB PREP WEB APP 🚀

A full-stack web application designed to help users prepare for tech interviews using artificial intelligence. Users can register, log in, configure mock interview settings, simulate a real-time behavioral/technical interview, and view an AI-generated report tracking their performance.

---

## 🛠️ Tech Stack

### Frontend
* **Core:** React.js (Vite)[cite: 1]
* **Routing:** React Router (`app.routes.jsx`)[cite: 1]
* **State Management:** React Context API (Auth & Interview Contexts)[cite: 1]
* **Styling:** SASS / SCSS[cite: 1]

### Backend
* **Core:** Node.js, Express.js[cite: 1]
* **Database:** MongoDB (via Mongoose models)[cite: 1]
* **AI Integration:** Google GenAI / OpenAI (AI Service layer)[cite: 1]
* **Authentication:** JWT (JSON Web Tokens) with Auth Middleware and Token Blacklisting[cite: 1]

---

## 📂 Project Structure

```text
├── Backend/
│   ├── src/
│   │   ├── config/          # Database connection
│   │   ├── controllers/     # Authentication & Interview logic
│   │   ├── middlewares/     # Auth checks & file handling
│   │   ├── model/           # User, Report, & Blacklist schemas
│   │   ├── routes/          # API endpoints
│   │   └── services/        # AI Engine integration
│   └── server.js            # App entry point
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/        # Login, Register, & Hook setups
│   │   │   ├── interview/   # Simulation dashboards & Reports
│   │   │   └── nav/         # Global Navigation Layout
│   │   └── main.jsx         # Vite entry point

```
---

## 📸 Project Screenshot
<img width="1920" height="1080" alt="Screenshot 2026-07-11 064928" src="https://github.com/user-attachments/assets/23127e77-4bed-48ba-81ce-b0233cff782a" />
<img width="1920" height="1080" alt="Screenshot 2026-07-11 065008" src="https://github.com/user-attachments/assets/5420bd33-3d4c-4472-a5df-cde46daf062b" />
<img width="1920" height="1080" alt="Screenshot 2026-07-11 065020" src="https://github.com/user-attachments/assets/fcfd22e2-e1a7-47ce-93fb-c9b47edaf12c" />



# 🚀 Getting Started

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v18 or later recommended)
2. **MongoDB** running locally, or a **MongoDB Atlas** connection URI
3. A **Google AI Studio API Key** (for the Gemini model)

---

## Installation & Setup

### 1. Clone the Repository

Clone the repository from GitHub and navigate to the project directory.

```bash
git clone https://github.com/theabhishek339/ai-job-prep-web-app.git
cd ai-job-prep-web-app
```

---

### 2. Backend Configuration & Startup

Navigate to the `Backend` directory and install the required dependencies.

```bash
cd Backend
npm install
```

Create a `.env` file inside the **Backend** directory and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

Start the backend development server:

```bash
npm run dev
```

> **Note:** The backend server should now be running at **http://localhost:5000**.

---

### 3. Frontend Configuration & Startup

Open a new terminal, return to the project root, navigate to the `Frontend` directory, install the dependencies, and start the Vite development server.

```bash
cd Frontend
npm install
npm run dev
```

---

### 4. Access the Application

Once Vite finishes compiling, it will display a local development URL in the terminal (typically **http://localhost:5173**).

Open the URL in your browser to start using the **AI Mock Interview Simulator**.
