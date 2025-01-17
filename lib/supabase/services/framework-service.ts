import { Database } from "../database.types";
import { BaseService } from "./base-service";
import { supabase } from "../client";

export type Framework = Database["public"]["Tables"]["frameworks"]["Row"];
export type FrameworkInsert =
  Database["public"]["Tables"]["frameworks"]["Insert"];

export class FrameworkService extends BaseService {
  private static instance: FrameworkService;

  private constructor() {
    super(supabase);
  }

  public static getInstance(): FrameworkService {
    if (!FrameworkService.instance) {
      FrameworkService.instance = new FrameworkService();
    }
    return FrameworkService.instance;
  }

  async getFrameworks(platform: string): Promise<Framework[]> {
    const { data, error } = await this.supabase
      .from("frameworks")
      .select("*")
      .eq("platform", platform)
      .order("name");

    if (error) {
      throw this.handleError(error);
    }

    return data;
  }

  async getWebFrameworks(type: "frontend" | "backend"): Promise<Framework[]> {
    const { data, error } = await this.supabase
      .from("frameworks")
      .select("*")
      .eq("platform", "web")
      .eq("type", type)
      .order("name");

    if (error) {
      throw this.handleError(error);
    }

    return data;
  }
}
