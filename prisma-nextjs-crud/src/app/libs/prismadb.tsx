import { PrismaClient } from "@prisma/client";
declare const globalThis: {
  prisma?: PrismaClient;
};
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") globalThis.prisma = client;

export default client;
