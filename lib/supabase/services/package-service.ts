import { BaseService } from "./base-service";
import { Database } from "../database.types";
import { supabase } from "../client";

export type Package = Database["public"]["Tables"]["packages"]["Row"];

class PackageService extends BaseService {
  async getPackagesByFramework(frameworkId: string): Promise<Package[]> {
    const { data, error } = await this.supabase
      .from("packages")
      .select("*")
      .eq("framework_id", frameworkId);

    if (error) {
      throw this.handleError(error);
    }

    return data;
  }
}

export const packageService = new PackageService(supabase);
