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
