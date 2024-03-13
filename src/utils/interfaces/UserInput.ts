import { User } from './User';

interface UserInput extends Omit<User, 'id' | 'role'> {}

export type { UserInput };