// Role Type
export type TRole = 'admin' | 'user';
// User Types
export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRole;
  isBlocked: boolean;
};
