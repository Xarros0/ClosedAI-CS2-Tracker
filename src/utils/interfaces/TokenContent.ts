import { LoginUser } from './LoginUser';

interface TokenContent {
    token: string;
    user: LoginUser;
}

export type { TokenContent };