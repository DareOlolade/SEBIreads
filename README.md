# 📝 Full Stack Notes App (MERN)

A simple full-stack Notes application built with the **MERN stack**.
Users can create, view, update, and delete notes.

This project is mainly for learning how to connect a **React frontend** with an **Express + MongoDB backend**.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## ✨ Features

* Create notes
* View all notes
* Update notes
* Delete notes
* RESTful API
* Simple and clean UI

---

## 📁 Project Structure

```
note-full-stack
 ├─ backend
 │   ├─ src
 │   │   ├─ routes
 │   │   ├─ models
 │   │   ├─ config
 │   │   └─ server.js
 │   └─ package.json
 ├─ frontend
 │   ├─ src
 │   └─ dist
 └─ package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/DareOlolade/SEBIreads.git
cd note-full-stack
```

---

### 2️⃣ Install dependencies & build frontend

```bash
npm run build
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
```

---

### 4️⃣ Start the application

```bash
npm start
```

Open your browser:

```
http://localhost:5001
```

---

## 🔌 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/notes     | Get all notes |
| POST   | /api/notes     | Create a note |
| PUT    | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

---

## 🎯 Purpose of the Project

* Practice MERN stack development
* Understand frontend–backend integration
* Learn REST APIs with Express
* Work with MongoDB using Mongoose

---

## 👤 Author

**Ola Dare**
Software Engineering Student
Federal University of Technology, Akure (FUTA)

---

## 📄 License

This project is open-source and available under the **ISC License**.
