import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IRegReq } from 'src/app/shared/types/registerReq.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserFailure = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);

export const getCurrentUserSuccess = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
