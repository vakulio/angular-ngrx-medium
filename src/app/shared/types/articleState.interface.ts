import { IArticle } from './getFeedRes.interface';

export interface IArticleState {
  isLoading: boolean;
  error: string | null;
  data: IArticle | null;
}
