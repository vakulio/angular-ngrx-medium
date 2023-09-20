import { ICreateArticleState } from 'src/app/create-article/types/createArticleState.interface';
import { IArticleState } from './articleState.interface';
import { IAuthState } from './authState.interface';
import { IFeedState } from './feedState.interface';
import { PopularTagsStateI } from './popularTagsState.interface';
import { IEditArticleState } from 'src/app/edit-article/types/editArticleState.interface';
import { ISettingState } from 'src/app/settings/types/settingsState.interface';
import { IUserProfileState } from './userProfilesState.interface';

export interface IAppState {
  popularTags: PopularTagsStateI;
  auth: IAuthState;
  feed: IFeedState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
  settings: ISettingState;
  userProfile: IUserProfileState;
}
