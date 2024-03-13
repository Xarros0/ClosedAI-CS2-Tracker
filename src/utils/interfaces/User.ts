interface User {
  id?: string;
  username?: string;
  email?: string;
  role?: 'user' | 'admin';
  token?: string;
}

export type { User };