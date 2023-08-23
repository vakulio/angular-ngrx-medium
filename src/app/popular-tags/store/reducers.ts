import { Action, createReducer, on } from '@ngrx/store';
import { PopularTagsStateI } from '../types/popularTagsState.interface';
import {
  getPopularTagAction,
  getPopularTagFailure,
  getPopularTagSuccess,
} from './actions/getPopularTags.action';

const initialState: PopularTagsStateI = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagAction,
    (state): PopularTagsStateI => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagSuccess,
    (state, action): PopularTagsStateI => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagFailure,
    (state): PopularTagsStateI => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateI, action: Action) {
  return popularTagsReducer(state, action);
}
