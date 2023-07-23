import { IAuthState } from './authState.interface';
import { IFeedState } from './feedState.interface';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
