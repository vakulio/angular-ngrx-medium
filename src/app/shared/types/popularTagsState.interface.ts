import { PopularTagType } from './tags.interface';

export interface PopularTagsStateI {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
