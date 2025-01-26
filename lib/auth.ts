import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function getAuthSession() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }
  return session;
}

export const BASE_URL = process.env.NEXT_PUBLIC_LOCAL_BASE_URL as string;
