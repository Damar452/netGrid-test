
import { createReducer, on } from "@ngrx/store";
import { PostsState } from "src/app/core/interfaces/post.state";
import { loadedPosts, loadPosts } from "../actions/posts.actions";

export const initialState: PostsState = {
    loading: false,
    posts: []
}

export const postsReducer = createReducer(
    initialState,
    on(loadPosts, (state) => {
        return {...state, loading: true}
    }),
    on(loadedPosts, (state, { posts }) => {
        return {...state, loading: false, posts}
    })
)