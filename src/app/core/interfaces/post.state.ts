import { Post } from "./post.interface";

export interface PostsState {
    loading: boolean,
    posts: ReadonlyArray<Post>
}