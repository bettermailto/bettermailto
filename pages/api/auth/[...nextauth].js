import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    Providers.Email({
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
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/sign-in",
    error: "/error",
    verifyRequest: "/verify-email",
  },

  database: process.env.MONGODB_URI,

  callbacks: {
    signIn: async (profile, account) => {
      const res = await fetch("https://api.github.com/user/emails", {
        headers: {
          Authorization: `token ${account.accessToken}`,
        },
      });
      const emails = await res.json();
      if (!emails || emails.length === 0) {
        return;
      }
      const sortedEmails = emails.sort((a, b) => b.primary - a.primary);
      profile.email = sortedEmails[0].email;
    },
  },
});
