import { IArticle } from './getFeedRes.interface';

export interface IGetFeedRes {
  articles: IArticle[];
  articlesCount: number;
}
