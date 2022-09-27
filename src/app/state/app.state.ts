import { ActionReducerMap } from "@ngrx/store";
import { PostsState } from "../core/interfaces/post.state";
import { postsReducer } from './reducers/posts.reducer';

export interface AppState {
    posts: PostsState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    posts: postsReducer
};