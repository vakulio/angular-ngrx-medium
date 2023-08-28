import { Action, createReducer, on } from '@ngrx/store';
import {
  createArticleAction,
  createArticleActionFailure,
  createArticleActionSuccess,
} from './actions/createArticle.action';
import { ICreateArticleState } from '../types/createArticleState.interface';

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
};

const ArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleActionSuccess,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleActionFailure,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: ICreateArticleState, action: Action) {
  return ArticleReducer(state, action);
}
