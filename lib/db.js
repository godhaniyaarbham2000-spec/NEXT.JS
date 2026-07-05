import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

let prisma;
let prismaInitError = null;
try {
  prisma = globalForPrisma.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
} catch (error) {
  prismaInitError = error;
  console.error("PrismaClient Initialization Error:", error);
}

export const db = prisma;
export const getDbError = () => prismaInitError;
