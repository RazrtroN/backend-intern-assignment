# backend-intern-assignment

# Backend Intern Assignment – Task Management API

## Overview
This project is a scalable backend system built using Node.js, Express, and MongoDB. It implements secure user authentication, role-based access control, and CRUD operations for task management.

---

## Features

### Authentication & Authorization
- User Registration with password hashing (bcrypt)
- Secure Login using JWT authentication
- Protected routes using middleware
- Role-based access control (User/Admin)

### Task Management
- Create, Read, Update, Delete (CRUD) tasks
- Tasks are user-specific
- Secure access using JWT tokens

### Security
- Password hashing using bcrypt
- JWT-based authentication
- Input validation and error handling

---

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs

---

## Project Structure
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js


---

## Setup Instructions

1. Clone the repository: git clone <your-repo-link>
2. Navigate to backend folder: cd backend
3. Install dependencies: npm install
4. Create ".env" file: MONGO_URI=your_mongodb_uri and JWT_SECRET=your_secret_key
5. Run the server: npm run dev


---

## API Endpoints

### Auth Routes
- "POST /api/v1/auth/register"
- "POST /api/v1/auth/login"

### 📌 Task Routes (Protected)
- "GET /api/v1/tasks"
- "POST /api/v1/tasks"
- "PUT /api/v1/tasks/:id"
- "DELETE /api/v1/tasks/:id"

---

## Authentication Usage
Include JWT token in headers: Authorization: Bearer <your_token>


---

## Scalability Considerations
- Modular architecture for easy expansion
- JWT-based stateless authentication
- Can integrate Redis for caching
- Can scale into microservices
- Docker-ready for deployment

---

## API Documentation
Postman collection included in the repository.

---


## Frontend kept minimal and focused on API testing ##

## Author
Devansh Tiwari
