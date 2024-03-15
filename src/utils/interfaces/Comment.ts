import { User } from './User';

interface Comment {
    id: string;
    author: User;
    postId: string;
    content: string;
    createdAt: Date;
}

export type { Comment };