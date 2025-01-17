import { Profile, ProfileUpdate } from "../types";
import { SupabaseClient } from "../client";
import { DatabaseError } from "../errors";

export class ProfileService {
  constructor(private readonly supabase: SupabaseClient) {}

  async getProfileByUsername(username: string): Promise<Profile> {
    const { data, error } = await this.supabase
      .from("profiles")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      throw new DatabaseError(error.message);
    }

    return data as Profile;
  }

  async updateProfile(
    profileId: string,
    update: ProfileUpdate
  ): Promise<Profile> {
    const { data, error } = await this.supabase
      .from("profiles")
      .update(update)
      .eq("id", profileId)
      .select()
      .single();

    if (error) {
      throw new DatabaseError(error.message);
    }

    return data as Profile;
  }
}
