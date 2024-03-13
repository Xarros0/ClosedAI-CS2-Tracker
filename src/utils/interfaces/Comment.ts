import { Types } from 'mongoose';
import { User } from './User';

interface Comment {
    id: string;
    author: Types.ObjectId | User;
    postId: string;
    content: string;
    createdAt: Date;
}

export type { Comment };