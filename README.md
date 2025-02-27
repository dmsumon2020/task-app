# 📝 Task Management App

![Task Management App](https://img.shields.io/badge/Status-Live-brightgreen)  
Live Demo: [Task Management App](https://splendid-daffodil-d9de57.netlify.app/)

## 🚀 Introduction

Task Management App is a modern, real-time task management system that allows users to create, edit, delete, and reorder tasks using an intuitive **drag-and-drop** interface. Tasks are categorized into **To-Do, In Progress,** and **Done**, with real-time updates to ensure smooth synchronization across devices.

## 📜 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Database Schema](#-database-schema)
- [Bonus Features](#-bonus-features)
- [Contributors](#-contributors)
- [License](#-license)

## ✨ Features

✔ **User Authentication** (Google Sign-in via Firebase)  
✔ **Drag & Drop Task Management**  
✔ **Instant Data Persistence (MongoDB + Express.js)**  
✔ **Real-Time Updates** (WebSockets or Change Streams)  
✔ **Fully Responsive UI** (Works on Desktop & Mobile)  
✔ **Optimistic UI Updates** for a seamless experience  
✔ **Dark Mode Toggle** (Bonus Feature)

## 🌍 Live Demo

🔗 **[Try it Now](https://splendid-daffodil-d9de57.netlify.app/)**

## 🛠 Tech Stack

- **Frontend:** React (Vite.js), react-beautiful-dnd
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase (Google Sign-in)
- **Real-Time Sync:** MongoDB Change Streams / WebSockets
- **Deployment:** Netlify (Frontend), Render / Heroku (Backend)

## 📥 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies:**

   - **Frontend**

     ```bash
     cd client
     npm install
     ```

   - **Backend**
     ```bash
     cd server
     npm install
     ```

3. **Set Up Environment Variables:**  
   Create a `.env` file in the `server` directory and add:

   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   JWT_SECRET=your_secret_key
   ```

4. **Run the Application:**

   - **Start Backend:**

     ```bash
     cd server
     npm start
     ```

   - **Start Frontend:**
     ```bash
     cd client
     npm run dev
     ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage

- **Sign in** using Google authentication.
- **Add tasks** by entering a title and description.
- **Drag & Drop tasks** between **To-Do, In Progress, and Done**.
- **Edit or Delete tasks** instantly.
- **Reorder tasks** within categories.
- **Refresh the page**, and your tasks remain unchanged.

## 📡 API Endpoints

| Method     | Endpoint     | Description                |
| ---------- | ------------ | -------------------------- |
| **POST**   | `/tasks`     | Create a new task          |
| **GET**    | `/tasks`     | Get all tasks for the user |
| **PUT**    | `/tasks/:id` | Update task details        |
| **DELETE** | `/tasks/:id` | Remove a task              |

## 🔑 Authentication

- Users must sign in via **Firebase Authentication (Google Sign-in)**.
- On first login, user details (User ID, email, display name) are stored in MongoDB.
- The frontend ensures only authenticated users access the app.

```

## 🤝 Contributors

- **[Your Name](https://github.com/yourusername)**

## 📜 License

This project is licensed under the **MIT License**.
```
