import { User } from './User';

interface UserOutput extends Omit<User, 'role'> {}

export type { UserOutput };