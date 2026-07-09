import Link from "next/link"
import { auth, signIn, signOut } from "@/auth"

export default async function Navbar() {
  // `auth()` function se hum user ka current session get kar sakte hain (Server Component me)
  const session = await auth()

  return (
    <nav style={{ padding: "20px", background: "#333", color: "#fff", display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      
      {/* Agar role 'admin' hai to Admin Panel dikhega */}
      {session?.user?.role === "admin" && (
        <Link href="/admin">Admin Panel</Link>
      )}

      {/* Agar role 'user' hai to User Panel dikhega */}
      {session?.user?.role === "user" && (
        <Link href="/user-panel">User Panel</Link>
      )}

      <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
        {session?.user ? (
          <>
            <span>Welcome, {session.user.name}</span>
            {/* Logout Button (NextAuth v5 requires POST/Form for logout) */}
            <form action={async () => {
              "use server"
              await signOut()
            }}>
              <button type="submit" style={{ background: "red", color: "white", padding: "5px 10px", cursor: "pointer" }}>Logout</button>
            </form>
          </>
        ) : (
          // Login Button
          <Link href="/login">
            <button style={{ background: "green", color: "white", padding: "5px 10px", cursor: "pointer" }}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}
