import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IAuthor } from 'src/app/shared/types/author.interface';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
);

export const getUserProfileFailure = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE
);

export const getUserProfileSuccess = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: IAuthor }>()
);
