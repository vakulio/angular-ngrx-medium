import { IBackendErr } from 'src/app/shared/types/backendErrors';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

export interface IEditArticleState {
  isLoading: boolean;
  article: IArticle | null;
  isSubmitting: boolean;
  validationErrors: IBackendErr | null;
}
