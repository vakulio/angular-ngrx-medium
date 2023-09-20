import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IUserProfileState } from 'src/app/shared/types/userProfilesState.interface';

export const userProfileFeatureSelector = (
  state: IAppState
): IUserProfileState => state.userProfile;

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: IUserProfileState) => userProfile.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: IUserProfileState) => userProfile.error
);

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfile: IUserProfileState) => {
    return userProfile.data;
  }
);
