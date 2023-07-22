import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { IRegReq } from 'src/app/shared/types/registerReq.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: IRegReq}>()
);

export const registerFailure = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErr }>()
);

export const registerSuccess = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
