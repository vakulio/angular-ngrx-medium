import { Action, createReducer, on } from '@ngrx/store';
import { IFeedState } from 'src/app/shared/types/feedState.interface';
import {
  getFeedAction,
  getFeedFailure,
  getFeedSuccess,
} from './actions/getFeed.action';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedFailure,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getFeedSuccess,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  )
);

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
