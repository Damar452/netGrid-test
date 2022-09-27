import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/core/interfaces/post.interface';

export const loadPosts = createAction(
    '[Post List] Load Posts'
)

export const loadedPosts = createAction(
    '[Post List] Loaded Success',
    props<{posts: Post[]}>()
)