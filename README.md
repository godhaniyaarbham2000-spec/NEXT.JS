# 🚀 Next.js App Router Masterclass Project

A full-stack modern web application built using **Next.js App Router**, featuring server-side rendering, advanced routing, robust authentication, caching mechanisms, and a MySQL database integrated via Prisma ORM. 

It serves as a comprehensive guide and working implementation of all major Next.js 14/15 features, allowing developers to see real-world use cases of Server Actions, Parallel Routes, and Auth.js.

---

## 🚀 Features

- ⚡ **Next.js App Router Architecture** (Server & Client Components)
- 🔐 **Authentication & RBAC** (Auth.js v5, Admin/User roles)
- 🗄️ **Database Integration** (MySQL with Prisma ORM)
- 🔄 **Advanced Routing** (Parallel, Intercepting, Route Groups, Catch-all)
- 📝 **Server Actions** (For seamless CRUD operations & mutations)
- 🚀 **Advanced Caching Strategies** (Data Cache, Full Route Cache, ISR, on-demand revalidation)
- 🎨 **Modern UI** (Tailwind CSS, responsive design)
- 📈 **SEO & Performance Optimization** (next/image, dynamic metadata)

---

## 🛠️ Tech Stack

### Frontend & Core
- Next.js (App Router)
- React.js
- Tailwind CSS
- JavaScript (ES6+)

### Backend & Database
- Node.js (Next.js Server)
- MySQL
- Prisma ORM
- Auth.js v5 (NextAuth)
- bcryptjs (Password Hashing)

---

## 📌 Topics Covered

- Next.js App Router Fundamentals
- Server Components vs Client Components
- Data Fetching (SSR, ISR, CSR)
- Advanced Routing (Parallel slots `@folder`, Intercepting `(.)folder`)
- Route Groups `(group)` & Nested Layouts
- API Routes & Server Actions
- Prisma ORM Integration (MySQL)
- Next.js Caching & Revalidation
- Authentication & Role-Based Access Control (RBAC)
- Error Boundaries & Loading UI (Suspense)
- SEO Optimization (Dynamic Metadata, Image Optimization)

---

## 📂 Project Structure
```text
nextjs_app/
│
├── app/
│ │
│ ├── (app)/               # Route Group for Dashboard
│ │ ├── dashboard/
│ │ │ ├── @analytics/      # Parallel Route
│ │ │ ├── @team/           # Parallel Route
│ │ │ └── settings/        # Nested Settings
│ │ └── layout.js
│ │
│ ├── (users)/             # Route Group for Public & Core pages
│ │ ├── about/
│ │ ├── blog/
│ │ ├── caching-demo/
│ │ ├── clientcomp/
│ │ ├── contact/
│ │ ├── datafetch/
│ │ ├── photos/            # Contains Intercepting Routes (.)id
│ │ ├── products/
│ │ ├── servercomp/
│ │ ├── server-action-demo/
│ │ └── page.js            # Main Home Page Directory
│ │
│ ├── admin/               # Protected Routes (RBAC)
│ ├── api/                 # Backend API Routes
│ ├── error.js             # Global Error UI
│ └── layout.js            # Root Layout
│
├── components/            # Reusable UI Components
├── lib/                   # Utility functions & MongoDB/Prisma clients
├── models/                # Mongoose/Prisma Schema Models
├── prisma/                # Prisma ORM setup & schema.prisma
├── public/                # Static assets & images
├── repositories/          # Data Access Layer / Services
│
├── auth.js                # Auth.js v5 Configuration
├── middleware.js          # Route Protection Middleware
├── .env                   # Environment Variables
├── next.config.mjs        # Next.js Configuration
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies
```
---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone <your-github-repo-link>
cd nextjs_app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables (.env)
Create a `.env` file in the root directory:
```env
DATABASE_URL="mysql://username:password@localhost:3306/your_db"
AUTH_SECRET="your_nextauth_secret_key"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Setup Prisma Database
```bash
npx prisma generate
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```

### App Runs On
```text
http://localhost:3000
```

---

## 💡 Usage

- Navigate to `/` to see the complete Project Directory and Structure map.
- Visit `/admin` to test Role-Based Access Control (RBAC).
- Check `/caching-demo` to understand Next.js cache layers.
- Go to `/photos` to test Parallel and Intercepting route modals.
- Test Server Actions and API Routes in `/contact` or `/server-action-demo`.

---

## ⚠️ Notes

- Make sure MySQL is running locally before executing Prisma commands.
- `AUTH_SECRET` must be set in `.env` for authentication to work.
- The `app/(users)/page.js` file serves as the main index that lists every feature implemented.

---

## 📸 Preview

- ⚡ Dynamic Route Mapping UI on the Home Page
- 🔐 Secure Login & Admin Dashboard
- 🚀 High-speed Server Rendered Pages
- 🎨 Modern Tailwind UI with responsive layouts
- 🖼️ Intercepting Modals for Photos Gallery

---

## 🧠 Key Learning Points

- Moving from Pages Router to **App Router** architecture.
- Understanding the difference and composition of **Server & Client Components**.
- Mastering **Server Actions** for form submissions without creating API routes.
- Using **Prisma ORM** for type-safe database queries.
- Implementing **Parallel and Intercepting routes** for advanced UI like modals.
- Managing Next.js aggressive **Caching mechanisms** (unstable_cache, revalidatePath).

---

## 📌 Future Improvements

- 📊 Add Admin Analytics Dashboard charts
- 🌗 Dark Mode toggle integration
- 💳 Stripe Payment Gateway integration
- ☁️ One-click deployment to Vercel
- 🧪 Add unit testing with Jest & React Testing Library

---

## 👨💻 Author

**Arbham Godhaniya**  
Full Stack Next.js Developer 🚀
