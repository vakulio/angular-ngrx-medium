import { IBackendErr } from 'src/app/shared/types/backendErrors';

export interface ICreateArticleState {
  isSubmitting: boolean;
  validationErrors: IBackendErr | null;
}
