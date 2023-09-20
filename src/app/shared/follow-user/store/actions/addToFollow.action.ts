import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IAuthor } from 'src/app/shared/types/author.interface';

export const followUserAction = createAction(
  ActionTypes.FOLLOW_USER,
  props<{ isFollowed: boolean; slug: string }>()
);

export const followUserFailure = createAction(ActionTypes.FOLLOW_USER_FAILURE);

export const followUserSuccess = createAction(
  ActionTypes.FOLLOW_USER_SUCCESS,
  props<{ profile: IAuthor }>()
);
