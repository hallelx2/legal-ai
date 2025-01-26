import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function getAuthSession() {
  const session = await getServerSession();
  if (!session) {
    redirect("/signin");
  }
  return session;
}


export const BASE_URL="http://localhost:8000";


export const getAccessToken =async (code: string, id: string)=>{
  try {
        const response = await fetch(`http://localhost:8000/docusign/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": code,
                "user_id": id
            })
        })
       return await response.json()
    } catch (error) {
        console.log(error)
        return {error}
    }
}
