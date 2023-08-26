import { Action, createReducer, on } from '@ngrx/store';
import {
  getArticleAction,
  getArticleFailure,
  getArticleSuccess,
} from './actions/getArticle.action';
import { routerNavigatedAction } from '@ngrx/router-store';
import { IArticleState } from 'src/app/shared/types/articleState.interface';

const initialState: IArticleState = {
  isLoading: true,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleFailure,
    (state): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getArticleSuccess,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(routerNavigatedAction, (): IArticleState => initialState)
);

export function reducers(state: IArticleState, action: Action) {
  return articleReducer(state, action);
}
