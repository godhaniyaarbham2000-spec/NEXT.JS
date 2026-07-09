import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const session = await auth()

  // RBAC LOGIC: Agar user ka role 'admin' nahi hai, to usko Home page pe bhej do
  if (session?.user?.role !== "admin") {
    redirect("/")
  }

  return (
    <div style={{ padding: "50px", textAlign: "center", color: "darkred" }}>
      <h1>Admin Dashboard 🛡️</h1>
      <p>This is <strong>Role-Based Protected Route (RBAC)</strong> </p>
      <p>Only this user who have<strong>'admin'</strong>  only access this page ny admin</p>
      
      <div style={{ marginTop: "20px", background: "#fee", padding: "20px", borderRadius: "10px" }}>
        <h2>Welcome Admin: {session?.user?.name}</h2>
        <p>you have all permissions</p>
      </div>
    </div>
  )
}