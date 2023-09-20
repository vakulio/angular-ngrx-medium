import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleActionSuccess = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const getArticleActionFailure = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
