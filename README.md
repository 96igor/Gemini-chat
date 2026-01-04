# Gemini ChatBot – Fullstack Java Application 🤖

A full-stack AI ChatBot application built with **Spring Boot** and **React**.  
The project integrates **Google Gemini API** via **Spring AI** to generate intelligent, real-time responses to user queries.

---

## 🚀 Features

- 🤖 AI-powered chat using Google Gemini  
- ⚡ Real-time response generation  
- 🖥️ Modern frontend with React + Vite  
- 🎨 UI styled with Bootstrap 5  
- 📊 Token usage tracking  
- 📚 Citation metadata support  

---

## 🏗️ Tech Stack

### Backend
- Java 17+
- Spring Boot 3
- Spring AI
- Maven

### Frontend
- React
- Vite
- Axios
- Bootstrap 5
- Node.js / npm

### AI API
- Google Gemini Pro

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/96igor/Gemini-chat.git
cd gemini-chat
```

---

### 2️⃣ Configure Gemini API Key

Before running the backend, configure your Gemini API key.

Open the file:

```text
src/main/resources/application.properties
```

Add your API key:

```properties
spring.ai.gemini.api-key=YOUR_ACTUAL_API_KEY_HERE
```

⚠️ **Do not commit your real API key to GitHub.**  
Use environment variables or `.gitignore` if needed.

---

### 3️⃣ Run Backend (Spring Boot)

1. Open the backend project in **IntelliJ IDEA**
2. Wait for Maven to download dependencies
3. Run the main class:

```text
GeminiChatApplication.java
```

Backend will be available at:

```
http://localhost:8080
```

---

### 4️⃣ Run Frontend (React)

Open a new terminal and navigate to the frontend directory:

```bash
cd gemini-chat-frontend
npm install
npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

### 5️⃣ Open the Application

Open your browser and go to:

```
http://localhost:5173
```

🎉 **Done!** You can now chat with the AI.

---

## 📂 Project Structure (Simplified)

```text
gemini-chat/
│
├── src/                    # Spring Boot backend
│   ├── main/
│   └── test/
│
├── gemini-chat-frontend/   # React frontend
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## 📌 Notes

- Make sure Java 17+ and Node.js are installed
- The backend must be running before using the frontend
- Designed as a fullstack demo / pet project with AI integration

---

## 🧠 Author

Java Fullstack Developer  
AI integrations • Spring Boot • React

---

⭐ If you like this project — feel free to star it!
