import { createAction, props } from '@ngrx/store';
import { ArticleActionTypes } from '../actionTypes';

export const deleteArticleAction = createAction(
  ArticleActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccess = createAction(
  ArticleActionTypes.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailure = createAction(
  ArticleActionTypes.DELETE_ARTICLE_FAILURE
);
