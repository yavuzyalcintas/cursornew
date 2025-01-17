import { Database } from "./database.types";

export type Tables = Database["public"]["Tables"];

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  website: string | null;
  updated_at: string | null;
  bio: string | null;
  social_links: Record<string, string> | null;
}

export type ProfileUpdate = Partial<Omit<Profile, "id">>;

export type ErrorResponse = {
  message: string;
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: any;
};
