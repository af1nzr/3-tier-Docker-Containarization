# 3-Tier Docker Application

A fully containerized web application based on a 3-tier architecture, including:

- **Frontend**: React.js
- **Backend**: Node.js/Express
- **Database**: (Optional to plug-in – e.g., MongoDB, PostgreSQL)

This setup uses **Docker** and **Docker Compose** to orchestrate the full stack in isolated containers, making it easy to build, run, and scale locally or in production.

---

## 📁 Project Structure

3-tier-project/
├── frontend/ # React frontend application
│ ├── Dockerfile # Frontend container configuration
│ ├── app.js # Main frontend application file
│ └── package.json # Frontend dependencies
│
├── backend/ # Node.js backend API
│ ├── Dockerfile # Backend container configuration
│ ├── app.js # Main backend application file
│ └── package.json # Backend dependencies
│
└── docker-compose.yml # Docker Compose to orchestrate all services


---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js and npm](https://nodejs.org/) (for optional local development)

---

## 🚀 Quick Start with Docker

1. **Clone the repository:**

   Clone this project to your local machine and navigate into it:

    git clone <your-repo-url>
    cd <project-directory>


2. **Start the application using Docker Compose:**

Build and run all services in detached mode:
     
     docker-compose up --build


3. **Access the application:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## 🔧 Local Development (without Docker)

This section is helpful if you want to develop the frontend or backend separately using Node and npm/yarn.

### 🌐 Frontend (React)

1. Navigate to the frontend directory:

cd frontend

2. Install dependencies:
npm install

3. Start the React development server:
npm start

The frontend will now be running at: `http://localhost:3000`

---

### ⚙️ Backend (Node.js)

1. Navigate to the backend directory:
cd backend

2. Install dependencies:
npm install

3. Start the backend server:
npm start

The backend API will now be running at: `http://localhost:5000`

---

## ⚙️ Docker Compose Overview

The `docker-compose.yml` file defines the services for the full stack, such as:

- Building images for frontend and backend
- Mapping ports for browser access
- Sharing networks between services
- (Optional) Adding volumes for persistence

This allows you to spin up the full application stack with just one command.

---

## 🔁 Useful Docker Commands

- **Rebuild the containers:**
docker-compose up --build

- **Stop the containers:**
docker-compose down

- **View container logs:**
docker-compose logs -f

---

## 🛠️ Customization

You can extend the project by:

- Adding a **database service** (e.g., MongoDB or PostgreSQL)
- Linking frontend to backend with environment variables
- Mounting source folders as **bind mounts** for live reload
- Adding `.env` files for local secrets

---

## 📦 Technologies Used

- **Docker & Docker Compose** – containerization
- **React** – frontend interface
- **Node.js + Express** – backend API
- *(Optional)* MongoDB / PostgreSQL – database layer

---

## 📄 License

This project is licensed under the [MIT License](LICENSE), so feel free to use and adapt it for your own purposes.

---

## 🙋‍♂️ Questions or Contributions?

If you encounter bugs or want to contribute:
- Open an issue
- Submit a pull request
- Or reach out directly

---
