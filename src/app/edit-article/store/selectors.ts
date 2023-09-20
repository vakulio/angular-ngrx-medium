import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IEditArticleState } from '../types/editArticleState.interface';

export const editArticleFeatureSelector = (
  state: IAppState
): IEditArticleState => state.editArticle;

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isSubmitting
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.isLoading
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (state: IEditArticleState) => state.validationErrors
);
