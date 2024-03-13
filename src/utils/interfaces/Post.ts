import { Types } from 'mongoose';
import { User } from './User';
import { Comment } from './Comment';

interface Post {
    id: string;
    author: Types.ObjectId | User;
    title: string;
    content: string;
    createdAt: Date;
    comments: Comment[];
}

export type { Post };