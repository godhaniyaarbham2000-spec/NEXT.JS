import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      //kiya check krna hai wo batata hai step1
      credentials: {
        email: { label: "Username/Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      // real database se compare krke check krta hai step2
      async authorize(credentials) {
        const { email, password } = credentials
        
        await dbConnect()

        // 1. Ek hi Collection (User) mein check karo ki user pehle se hai ya nahi
        const existingUser = await User.findOne({ email })

        if (existingUser) {
          const isPasswordMatch = await bcrypt.compare(password, existingUser.password)
          if (!isPasswordMatch) return null; // Galat password pe error handle hoga
          
          return {
            id: existingUser._id.toString(),
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role // "admin" ya "user" jo bhi database mein hai
          }
        }

        // ==========================================
        // 2. MAGIC TRICK (AUTO-SIGNUP)
        // Agar user pehle se database mein nahi hai, 
        // to usko naya Normal User banakar turant login karva do
        // ==========================================
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
          name: email, // Usne jo username/email daala, wahi uska naam ban jayega
          email: email, 
          password: hashedPassword,
          role: "user" // Auto-signup se hamesha normal user banega!
        })

        return {
          id: newUser._id.toString(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role
        }
      }
    })
  ],
  //step 3 pass username right then jwt token banega
  // first time login krta hai to id banata hai jwt 
  // step4callback wo fun hai jo kisi khas action ke baad nextauth chalata hai login hone ke bad data mai chedchad krna hai to
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role
      }
      return session
    }
  },
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  secret: String(process.env.AUTH_SECRET), //step5 encryp krke user ko broweser mai bhej deta hai
})
