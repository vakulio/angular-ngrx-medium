import { createSelector } from '@ngrx/store';
import { PopularTagsStateI } from '../types/popularTagsState.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';

export const popularTagsFeatureSelector = (
  state: IAppState
): PopularTagsStateI => state.popularTags;

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,

  (state: PopularTagsStateI) => {
    return state.data;
  }
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateI) => state.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (state: PopularTagsStateI) => state.error
);
