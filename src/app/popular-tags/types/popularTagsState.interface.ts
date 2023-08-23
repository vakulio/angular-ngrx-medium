import { PopularTagType } from 'src/app/shared/types/tags.interface';

export interface PopularTagsStateI {
  data: PopularTagType[];
  error: string | null;
  isLoading: boolean;
}
