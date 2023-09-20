import { ISettingState } from './../types/settingsState.interface';
import { createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailure,
  updateCurrentUserSuccess,
} from 'src/app/store/actions/updateCurrentUser.action';

const initialState: ISettingState = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): ISettingState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccess,
    (state): ISettingState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailure,
    (state, action): ISettingState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: ISettingState, action) {
  return settingsReducer(state, action);
}
