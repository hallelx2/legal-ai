import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            },
          );

          if (!response.ok) {
            console.log(response);
            throw new Error("Invalid credentials");
          }

          const data = await response.json();

          // Mapping the TokenResponseDto to the user object NextAuth expects
          return {
            id: data.userId,
            email: data.email,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Update the JWT token with the user data
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.email = user.email;
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Update the session with the token data
      session.user = {
        id: token.sub,
        email: token.email,
      };
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60, // 3 hours
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
