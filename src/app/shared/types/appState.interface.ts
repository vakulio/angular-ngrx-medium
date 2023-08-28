import { ICreateArticleState } from 'src/app/create-article/types/createArticleState.interface';
import { IArticleState } from './articleState.interface';
import { IAuthState } from './authState.interface';
import { IFeedState } from './feedState.interface';
import { PopularTagsStateI } from './popularTagsState.interface';

export interface IAppState {
  popularTags: PopularTagsStateI;
  auth: IAuthState;
  feed: IFeedState;
  article: IArticleState;
  createArticle: ICreateArticleState;
}
