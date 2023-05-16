import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ username: string; email: string; password: string }>()
);

export const registerFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: any }>()
);

export const registerSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: any }>()
);
