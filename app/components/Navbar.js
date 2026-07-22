import Link from "next/link"
import { auth, signIn, signOut } from "@/auth"

export default async function Navbar() {
  // `auth()` function se hum user ka current session get kar sakte hain (Server Component me)
  const session = await auth()

  return (
    <nav className="p-4 bg-gray-900 text-white flex flex-wrap items-center gap-4 shadow-md">
      <Link href="/" className="font-medium hover:text-gray-300 transition-colors">Home</Link>
      <Link href="/dashboard" className="font-medium hover:text-gray-300 transition-colors">Dashboard</Link>
      
      {/* Agar role 'admin' hai to Admin Panel dikhega */}
      {session?.user?.role === "admin" && (
        <Link href="/admin" className="font-medium hover:text-gray-300 transition-colors">Admin Panel</Link>
      )}

      {/* Agar role 'user' hai to User Panel dikhega */}
      {session?.user?.role === "user" && (
        <Link href="/user-panel" className="font-medium hover:text-gray-300 transition-colors">User Panel</Link>
      )}

      <div className="ml-auto flex flex-wrap items-center gap-3 mt-2 sm:mt-0">
        {session?.user ? (
          <>
            <span className="text-sm font-medium">Welcome, {session.user.name}</span>
            {/* Logout Button (NextAuth v5 requires POST/Form for logout) */}
            <form action={async () => {
              "use server"
              await signOut()
            }}>
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer">Logout</button>
            </form>
          </>
        ) : (
          // Login Button
          <Link href="/login">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer">Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}
