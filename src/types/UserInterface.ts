// UserInterface.ts

// Interface for the user object
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

// Interface for user login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// Interface for user registration data
export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}
