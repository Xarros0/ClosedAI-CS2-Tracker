import { User } from './User';

interface UserModify extends Partial<Omit<User, 'id' | 'role'>> {}

export type { UserModify };