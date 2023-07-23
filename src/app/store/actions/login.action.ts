import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import { ILogReq } from 'src/app/shared/types/loginReq.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILogReq}>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: IBackendErr }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
