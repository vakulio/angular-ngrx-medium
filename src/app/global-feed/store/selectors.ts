import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IFeedState } from 'src/app/shared/types/feedState.interface';

export const feedFeatureSelector = (state: IAppState): IFeedState => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => {
    return feedState.data;
  }
);
