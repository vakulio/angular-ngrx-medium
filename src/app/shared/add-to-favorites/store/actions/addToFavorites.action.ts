import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesFailure = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);

export const addToFavoritesSuccess = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: IArticle }>()
);
