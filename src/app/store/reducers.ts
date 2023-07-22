import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../shared/types/authState.interface';
import { registerAction, registerFailure, registerSuccess } from './actions/register.action';
import { loginAction, loginFailure, loginSuccess } from './actions/login.action';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => ({ ...state, isSubmitting: true, validationErrors: null })),
  on(registerSuccess, (state, action): IAuthState => ({ ...state, isSubmitting: false, isLoggedIn: true, currentUser: action.currentUser, validationErrors: null })),
  on(registerFailure, (state, action): IAuthState => ({ ...state, isSubmitting: false, validationErrors: action.errors})),

  on(loginAction, (state): IAuthState => ({ ...state, isSubmitting: true, validationErrors: null })),
  on(loginSuccess, (state, action): IAuthState => ({ ...state, isSubmitting: false, isLoggedIn: true, currentUser: action.currentUser, validationErrors: null })),
  on(loginFailure, (state, action): IAuthState => ({ ...state, isSubmitting: false, validationErrors: action.errors})),
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
