import { createSelector } from '@ngrx/store';
import { ISettingState } from '../types/settingsState.interface';
import { IAppState } from 'src/app/shared/types/appState.interface';

export const settingsFeatureSelector = (state: IAppState): ISettingState =>
  state.settings;

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingState: ISettingState) => settingState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingState: ISettingState) => settingState.validationErrors
);
