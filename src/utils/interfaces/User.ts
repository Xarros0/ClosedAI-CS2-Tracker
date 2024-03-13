interface User {
  id?: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
}

export type { User };