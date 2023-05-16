import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../shared/types/authState.interface';
import { registerAction } from './actions/register.action';
import { state } from '@angular/animations';

const initialState: IAuthState = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => ({ ...state, isSubmitting: true }))
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
