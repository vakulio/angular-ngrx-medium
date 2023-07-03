import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IRegReq } from 'src/app/shared/types/registerReq.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<IRegReq>()
);

export const registerFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ error: any }>()
);

export const registerSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: any }>()
);
