import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { PopularTagType } from 'src/app/shared/types/tags.interface';

export const getPopularTagAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
