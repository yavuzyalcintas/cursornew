import { SupabaseClient } from "../client";
import { AuthenticationError } from "../errors";

export interface SignUpData {
  email: string;
  password: string;
  full_name?: string;
  username: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export class AuthService {
  constructor(private readonly supabase: SupabaseClient) {}

  async signUp({ email, password, full_name, username }: SignUpData) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name,
          username,
        },
      },
    });

    if (error) {
      throw new AuthenticationError(error.message);
    }

    return data;
  }

  async signIn({ email, password }: SignInData) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new AuthenticationError(error.message);
    }

    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      throw new AuthenticationError(error.message);
    }
  }

  async getSession() {
    const {
      data: { session },
      error,
    } = await this.supabase.auth.getSession();
    if (error) {
      throw new AuthenticationError(error.message);
    }
    return session;
  }
}
