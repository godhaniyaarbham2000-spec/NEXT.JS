"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Custom login logic using NextAuth
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid Email or Password");
      // Agar login fail ho to fields ko automatically khali kar do!
      setEmail("");
      setPassword("");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome to Project Login</h1>
      <form 
        onSubmit={handleSubmit} 
        autoComplete="off" // Browser auto-fill band karne ke liye
        style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "0 auto" }}
      >
        <input
          type="text"
          name="email"
          placeholder="Username or Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password" // Trick to force browser to ignore autofill
          required
          style={{ padding: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password" // Trick to force browser to ignore autofill
          required
          style={{ padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", background: "blue", color: "white", cursor: "pointer" }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
