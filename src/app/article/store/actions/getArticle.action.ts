import { createAction, props } from '@ngrx/store';
import { ArticleActionTypes } from '../actionTypes';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export const getArticleAction = createAction(
  ArticleActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccess = createAction(
  ArticleActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleFailure = createAction(
  ArticleActionTypes.GET_ARTICLE_FAILURE
);
