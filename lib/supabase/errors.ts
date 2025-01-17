/* eslint-disable @typescript-eslint/no-explicit-any */
export class DatabaseError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public details?: any
  ) {
    super(message);
    this.name = "DatabaseError";
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public status: number = 400,
    public details?: any
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

export class AuthenticationError extends Error {
  constructor(
    message: string = "Not authenticated",
    public status: number = 401
  ) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export class AuthorizationError extends Error {
  constructor(message: string = "Not authorized", public status: number = 403) {
    super(message);
    this.name = "AuthorizationError";
  }
}
