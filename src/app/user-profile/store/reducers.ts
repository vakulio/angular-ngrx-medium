import { Action, createReducer, on } from '@ngrx/store';
import { IUserProfileState } from 'src/app/shared/types/userProfilesState.interface';
import {
  getUserProfileAction,
  getUserProfileFailure,
  getUserProfileSuccess,
} from './actions/getUserProfile.action';

const initialState: IUserProfileState = {
  data: null,
  error: null,
  isLoading: false,
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccess,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailure,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: IUserProfileState, action: Action) {
  return userProfileReducer(state, action);
}
