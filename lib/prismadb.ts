import { PrismaClient } from "@prisma/client";

//global doesn't have effect with hot reloading
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
