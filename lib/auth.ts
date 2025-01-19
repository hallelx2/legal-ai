import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function getAuthSession() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }
  return session;
}
