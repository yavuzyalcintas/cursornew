import { SupabaseClient } from "../client";
import { DatabaseError, ValidationError } from "../errors";
import { ErrorResponse } from "../types";

export abstract class BaseService {
  constructor(protected readonly supabase: SupabaseClient) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected handleError(error: any): never {
    const errorResponse: ErrorResponse = {
      message: error.message || "An unexpected error occurred",
      status: error.status || 500,
      details: error.details,
    };

    if (error.code === "PGRST116") {
      throw new ValidationError(
        errorResponse.message,
        400,
        errorResponse.details
      );
    }

    throw new DatabaseError(
      errorResponse.message,
      errorResponse.status,
      errorResponse.details
    );
  }

  protected async validateAuth() {
    const {
      data: { session },
    } = await this.supabase.auth.getSession();

    if (!session) {
      throw new ValidationError("Not authenticated", 401);
    }

    return session;
  }
}
