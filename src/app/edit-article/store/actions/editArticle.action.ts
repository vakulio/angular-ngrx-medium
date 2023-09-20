import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IArticleInput } from 'src/app/shared/types/articleInput.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
);

export const updateArticleActionSuccess = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const updateArticleActionFailure = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErr }>()
);
