import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export async function uploadFile({ path, file, bucket }: any) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}

// npm install @supabase/supabase-js
// npm install @supabase/ssr
