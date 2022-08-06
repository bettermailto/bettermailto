import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "/mongodb";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: {
    jwt: true,
  },

  adapter: MongoDBAdapter(clientPromise),

  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/sign-in",
    error: "/error",
    verifyRequest: "/verify-email",
  },

  database: process.env.MONGODB_URI,
});
