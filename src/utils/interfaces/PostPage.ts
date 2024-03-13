import { Post } from './Post';

interface PostPage {
    posts: Post[];
    numberOfPages: number;
}

export type { PostPage };