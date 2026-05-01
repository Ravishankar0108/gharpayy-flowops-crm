<h1 align="center">🚀 Gharpayy FlowOps CRM</h1>

<p align="center">
  <b>A Modern Lead Management CRM for PG Reservation Systems</b>
</p>

<p align="center">
  👨‍💻 Built by <b>Ravi Shankar Shukla</b>
</p>

<p align="center">
  <a href="https://gharpayy-flowops-crm.onrender.com">
    <img src="https://img.shields.io/badge/Live%20Demo-Open%20App-blue?style=for-the-badge&logo=render">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Backend-SpringBoot-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Frontend-HTML%20CSS%20JS-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Deployment-Render-black?style=for-the-badge">
</p>

---

## 📌 Overview

This is a **full-stack Lead Management CRM** designed for:

- 📥 Capturing leads  
- 🔄 Managing pipeline stages  
- 📅 Scheduling PG visits  
- 👤 Assigning ownership  
- 📊 Tracking dashboard metrics  

---

## 🌐 Live Demo

🔗 https://gharpayy-flowops-crm.onrender.com

---

## ✨ Features
## 📊 CRM Workflow

```mermaid
graph LR
A[New Lead] --> B[Contacted]
B --> C[Tour Scheduled]
C --> D[Visited]
D --> E[Booked]
D --> F[Lost]
```

---

## 📊 System Architecture

```mermaid
flowchart TD
UI[Frontend - HTML/CSS/JS]
API[Spring Boot Backend]
DB[(H2 Database)]

UI --> API
API --> DB
```

---

## 📂 Project Structure

```
flowopscrm/
│── src/
│   ├── main/
│   │   ├── java/com/gharpayy/flowopscrm/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   ├── application.properties
│── Dockerfile
│── pom.xml
```

| Feature | Description |
|--------|------------|
| 📥 Lead Capture | Name, Phone, Location, Budget |
| 🔄 Pipeline | New → Contacted → Tour → Booked |
| 🌡 Temperature | Hot / Warm / Cold |
| 👤 Owner Assignment | Assign leads |
| 📅 Visit Scheduling | Schedule PG tours |
| 📊 Dashboard | Real-time lead count |
| ❌ Delete | Remove leads |

---

---

