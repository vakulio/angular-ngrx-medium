import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IArticleInput } from 'src/app/shared/types/articleInput.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
);

export const createArticleActionSuccess = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const createArticleActionFailure = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErr }>()
);
