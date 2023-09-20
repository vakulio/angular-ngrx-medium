import { IAuthor } from './author.interface';

export interface IUserProfileState {
  isLoading: boolean;
  error: string | null;
  data: IAuthor | null;
}
