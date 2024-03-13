import { User } from './User';

interface LoginUser extends Omit<User, 'password'> {}

export type { LoginUser };