import { createAction, props } from '@ngrx/store';
import { FeedActionTypes } from '../actionTypes';
import { IGetFeedRes } from 'src/app/shared/types/article.interface';

export const getFeedAction = createAction(
  FeedActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccess = createAction(
  FeedActionTypes.GET_FEED_SUCCESS,
  props<{ feed: IGetFeedRes }>()
);

export const getFeedFailure = createAction(FeedActionTypes.GET_FEED_FAILURE);
