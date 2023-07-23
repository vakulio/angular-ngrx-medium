import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../shared/types/authState.interface';
import { registerAction, registerFailure, registerSuccess } from './actions/register.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import { getCurrentUserAction, getCurrentUserFailure, getCurrentUserSuccess } from './actions/getCurrentUser.action';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
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
  on(loginSuccessAction, (state, action): IAuthState => ({ ...state, isSubmitting: false, isLoggedIn: true, currentUser: action.currentUser, validationErrors: null })),
  on(loginFailureAction, (state, action): IAuthState => ({ ...state, isSubmitting: false, validationErrors: action.errors})),

  on(getCurrentUserAction, (state): IAuthState => ({ ...state, isLoading: true})),
  on(getCurrentUserSuccess, (state, action): IAuthState => ({ ...state, isLoading: false, isLoggedIn: true, currentUser: action.currentUser})),
  on(getCurrentUserFailure, (state, action): IAuthState => ({ ...state, isLoading: false, isLoggedIn: false, currentUser: null})),
);

export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action);
}
