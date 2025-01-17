import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "./database.types";

export function createServerClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
}
