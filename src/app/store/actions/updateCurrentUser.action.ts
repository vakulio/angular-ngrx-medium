import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import {
  ICurrentUser,
  ICurrentUserInput,
} from 'src/app/shared/types/currentUser.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
);

export const updateCurrentUserFailure = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErr }>()
);

export const updateCurrentUserSuccess = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
