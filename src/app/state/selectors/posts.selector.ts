
import { createSelector } from '@ngrx/store';
import { PostsState } from 'src/app/core/interfaces/post.state';
import { AppState } from '../app.state';

export const selectItemsFeature = (state: AppState) => state.posts;

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: PostsState) => state.posts
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: PostsState) => state.loading
)

