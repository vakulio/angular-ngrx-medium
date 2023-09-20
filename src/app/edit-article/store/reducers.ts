import { Action, createReducer, on } from '@ngrx/store';

import { IEditArticleState } from '../types/editArticleState.interface';
import {
  updateArticleAction,
  updateArticleActionFailure,
  updateArticleActionSuccess,
} from './actions/editArticle.action';
import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
} from './actions/getArticle.action';

const initialState: IEditArticleState = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null,
};

const EditArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleActionSuccess,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleActionFailure,
    (state, action): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleActionSuccess,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleActionFailure,
    (state): IEditArticleState => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: IEditArticleState, action: Action) {
  return EditArticleReducer(state, action);
}
