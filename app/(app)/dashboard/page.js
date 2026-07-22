import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth()

  // Agar user login nahi hai, to usko login pe bhej do (Yeh Middleware ka aasaan option hai)
  if (!session) {
    redirect("/login")
  }

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Dashboard Page</h1>
      <p>this is <strong>Protected Route</strong> .</p>
      <p>You Dont access this page without login if u access this page without login u redirect to login page </p>
      
      <div style={{ marginTop: "20px", background: "#f4f4f4", padding: "20px", borderRadius: "10px" }}>
        <h2>Aapki Details:</h2>
        <p>Name: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
        <p>Role: {session?.user?.role}</p>
      </div>
    </div>
  )
}
