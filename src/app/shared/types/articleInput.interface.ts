import { IArticle } from './getFeedRes.interface';

export interface IArticleInput {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface ISaveArticleRes {
  article: IArticle;
}
