import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function UserPanelPage() {
  const session = await auth()

  // RBAC LOGIC: Agar user ka role 'user' nahi hai, to usko Home page pe bhej do
  if (session?.user?.role !== "user") {
    redirect("/")
  }

  return (
    <div style={{ padding: "50px", textAlign: "center", color: "darkblue" }}>
      <h1>User Dashboard 👤</h1>
      <p>This is <strong>Role-Based Protected Route (RBAC)</strong> </p>
      <p>Only this user can access who have role <strong>'user'.</strong> only role user can access this page</p>
      
      <div style={{ marginTop: "20px", background: "#eef", padding: "20px", borderRadius: "10px" }}>
        <h2>Welcome User: {session?.user?.name}</h2>
        <p> you have permissions as a normal user</p>
      </div>
    </div>
  )
}
