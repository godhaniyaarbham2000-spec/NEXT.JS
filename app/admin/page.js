import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth()

  // RBAC LOGIC: Agar user ka role 'admin' nahi hai, to usko Home page pe bhej do
  if (session?.user?.role !== "admin") {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-2xl text-center border-t-4 border-red-500">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Admin Dashboard 🛡️</h1>
        <p className="text-slate-600 mb-2">This is a <strong>Role-Based Protected Route (RBAC)</strong></p>
        <p className="text-sm text-red-500 bg-red-50 p-2 rounded-lg mb-6">Only users with the <strong>&apos;admin&apos;</strong> role can access this page.</p>
        
        <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-2">Welcome Admin: {session?.user?.name}</h2>
          <p className="text-red-600 font-medium">You have full system permissions.</p>
        </div>
      </div>
    </div>
  )
}