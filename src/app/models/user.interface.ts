export type Roles = 'User' | 'Admin';

export interface User {
  username: string;
  password: string;
}

export interface UserResponse {
  message: string;
  token: string;
  username: string;
  role: Roles;
}