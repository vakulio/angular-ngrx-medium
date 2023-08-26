import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IArticleState } from 'src/app/shared/types/articleState.interface';

export const articleFeatureSelector = (state: IAppState): IArticleState =>
  state.article;

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => {
    return articleState.data;
  }
);
