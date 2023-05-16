import { createSelector } from '@ngrx/store';
import { IAppState } from '../shared/types/appState.interface';
import { IAuthState } from '../shared/types/authState.interface';

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);
