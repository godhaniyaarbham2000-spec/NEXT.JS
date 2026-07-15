# 🚀 NextJS-AppRouter-Mastery (Full-Stack Web App)

A complete, production-grade web application built entirely on the modern **Next.js App Router**. This project demonstrates the power of building full-stack applications using a single framework (Frontend + Backend unified) running on **Node.js**.

It covers everything from advanced routing concepts, Server Components, and Caching to database integration with **Prisma (MySQL)** and secure authentication using **Auth.js v5**.

---

## 🚀 Features

- ⚡ **Next.js Full-Stack Architecture**: Unified frontend and backend.
- 🔐 **Secure Authentication**: Credentials & OAuth login via Auth.js v5.
- 🛡️ **Role-Based Access Control (RBAC)**: Protected Admin and User routes.
- 🗄️ **Database Integration**: MySQL database connected via Prisma ORM.
- 🔄 **Advanced Routing**: Route Groups, Parallel Routes, and Intercepting Routes (Modals).
- 📝 **Server Actions**: Secure form handling and CRUD operations without traditional API routes.
- 🚀 **Next.js Caching**: Implementation of Data Cache, Full Route Cache, and ISR.
- 🎨 **Modern UI**: Clean and responsive styling with Tailwind CSS.

---

## 🛠️ Tech Stack

### Framework & Language
- **Next.js (App Router)**: The core full-stack framework.
- **React.js**: Used internally by Next.js for building Client and Server Components.
- **Node.js**: The runtime environment powering Next.js Server Actions, APIs, and SSR.
- **JavaScript (ES6+)**: Primary programming language.

### Database & Backend
- **MySQL**: Relational database for storing users, posts, and teams data.
- **Prisma ORM**: Type-safe database client and schema management.
- **Auth.js v5 (NextAuth)**: Next-generation authentication library.
- **bcryptjs**: For secure password hashing.

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

---

## 📌 Topics Covered

- Next.js Server Components vs Client Components
- Data Fetching (SSR, ISR, CSR) and React Suspense
- Advanced Routing (Parallel slots `@folder`, Intercepting `(.)folder`)
- API Routes & Server Actions
- Prisma ORM Data Modeling
- Next.js Caching & Revalidation Strategies
- Middleware for Route Protection

---

## 📂 Project Structure
```text
nextjs_app/
│
├── app/
│ │
│ ├── (app)/               # Route Group for Dashboard
│ │ ├── dashboard/         # Parallel Routes (@analytics, @team)
│ │ └── layout.js
│ │
│ ├── (users)/             # Route Group for Public Pages
│ │ ├── about/             
│ │ ├── clientcomp/        # Client Components Data Fetching
│ │ ├── servercomp/        # Server Components Data Fetching
│ │ ├── contact/           # API Routes & Prisma Integration
│ │ ├── photos/            # Intercepting Routes Modals
│ │ └── page.js            # Main Directory Page
│ │
│ ├── admin/               # Protected Routes (RBAC)
│ ├── api/                 # Backend API Routes
│ ├── error.js             # Global Error UI
│ └── layout.js            # Root Layout
│
├── components/            # Reusable UI Components
├── prisma/                # Prisma ORM setup & schema.prisma
├── auth.js                # Auth.js v5 Configuration
├── middleware.js          # Route Protection Middleware
├── .env                   # Environment Variables
└── package.json           # All npm dependencies
```

---

## ⚙️ Installation & Setup (Step-by-Step)

Follow these steps to run the project from scratch on your local machine.

### 1. Clone the Repository
Download the code to your local machine:
```bash
git clone https://github.com/godhaniyaarbham2000-spec/NextJS-AppRouter-Mastery.git
cd NextJS-AppRouter-Mastery/nextjs_app
```

### 2. Install Node.js Dependencies
This command will read the `package.json` file and install all required packages (Next.js, React, Prisma, Auth.js, etc.):
```bash
npm install
```

### 3. Setup Environment Variables (.env)
Create a new file named `.env` in the root folder and add your database and auth credentials:
```env
# MySQL Database Connection String (Update with your local MySQL username/password)
DATABASE_URL="mysql://root:password@localhost:3306/nextjs_mastery_db"

# NextAuth Secret (Can be any random string for local development)
AUTH_SECRET="my_super_secret_auth_key_123"

# Base URL for Auth.js
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Setup MySQL Database with Prisma
Ensure your local MySQL server (like XAMPP or MySQL Workbench) is running. Then, execute this command to create the tables in your database based on the Prisma schema:
```bash
npx prisma db push
```
*(Optional)* Generate the Prisma Client to interact with the DB:
```bash
npx prisma generate
```

### 5. Start the Development Server
Run the Next.js/Node.js development server:
```bash
npm run dev
```

### 6. Open in Browser
The application will be live at:
```text
http://localhost:3000
```

---

## 💡 Usage Guide

- **Home Page (`/`)**: View the dynamic Project Directory Mapping.
- **RBAC Testing (`/admin`)**: Try accessing the admin panel. If not logged in as admin, you will be redirected.
- **API & DB Testing (`/contact`)**: Submit the form to test Data insertion into MySQL via Prisma.
- **Advanced Modals (`/photos`)**: Click on a photo to see Next.js Intercepting routes in action.

---

## ⚠️ Notes

- Next.js uses **Node.js** under the hood to compile code and run server components.
- Ensure your MySQL database is active before running `npx prisma db push`.
- Never commit your `.env` file to GitHub (it is ignored via `.gitignore`).
- All Next.js dependencies (including React) are automatically installed when you run `npm install`.

---

## 📸 Preview Highlights

- ⚡ Ultra-fast Server Rendered Pages
- 🔐 Secure Login & Admin Dashboard
- 🎨 Modern Tailwind UI with responsive layouts
- 🖼️ Intercepting Modals for Photos Gallery

---

## 🧠 Key Learning Points

- Unifying Backend and Frontend logic seamlessly in a single framework.
- Utilizing **Node.js** for powerful Next.js Server Actions.
- Using **React.js** correctly within the App Router (understanding `'use client'` vs Server Components).
- Mastering **Prisma ORM** for type-safe database queries without writing raw SQL.
- Managing Next.js aggressive **Caching mechanisms** (`unstable_cache`, `revalidatePath`).

---

## 👨💻 Author

**Arbham Godhaniya**  
MERN & Next.js Full Stack Developer 🚀
