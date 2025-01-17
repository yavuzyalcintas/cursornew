import { BaseService } from "./base-service";
import { Database } from "../database.types";
import { supabase } from "../client";

export type Platform = Database["public"]["Tables"]["platforms"]["Row"];

class PlatformService extends BaseService {
  constructor() {
    super(supabase);
  }

  async getPlatforms() {
    const { data, error } = await this.supabase
      .from("platforms")
      .select("*")
      .order("id");

    if (error) {
      throw this.handleError(error);
    }

    return data;
  }
}

export const platformService = new PlatformService();
