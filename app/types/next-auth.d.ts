import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}
