import mysql from "mysql2/promise"

const url = new URL(process.env.DATABASE_URL || "mysql://root:Qwarty@123@localhost:3306/next_db");

export const db = mysql.createPool({
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.substring(1),
  port: url.port || 3306,
  ssl: url.hostname.includes('tidbcloud') ? { rejectUnauthorized: true } : undefined
})