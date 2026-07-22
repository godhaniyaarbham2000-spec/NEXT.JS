import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic";

export default async function UserPanelPage() {
  const session = await auth()

  // RBAC LOGIC: Agar user ka role 'user' nahi hai, to usko Home page pe bhej do
  if (session?.user?.role !== "user") {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-2xl text-center border-t-4 border-blue-500">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">User Dashboard 👤</h1>
        <p className="text-slate-600 mb-2">This is a <strong>Role-Based Protected Route (RBAC)</strong></p>
        <p className="text-sm text-blue-500 bg-blue-50 p-2 rounded-lg mb-6">Only users with the <strong>&apos;user&apos;</strong> role can access this page.</p>
        
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Welcome User: {session?.user?.name}</h2>
          <p className="text-blue-600 font-medium">You have permissions as a normal user.</p>
        </div>
      </div>
    </div>
  )
}
