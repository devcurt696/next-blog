import NextAuth from "next-auth/next";
import { authOptions } from "@/utility/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};