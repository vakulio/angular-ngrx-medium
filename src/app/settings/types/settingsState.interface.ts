import { IBackendErr } from 'src/app/shared/types/backendErrors';

export interface ISettingState {
  isSubmitting: boolean;
  validationErrors: IBackendErr | null;
}
