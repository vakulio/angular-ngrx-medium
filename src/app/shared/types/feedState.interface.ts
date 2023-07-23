import { IGetFeedRes } from './article.interface';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedRes | null;
}
