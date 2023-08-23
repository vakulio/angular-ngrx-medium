import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getPopularTagFailure,
  getPopularTagAction,
  getPopularTagSuccess,
} from './getPopularTags.action';
import { PopularTagsService } from '../../popular-tags.service';
import { PopularTagType } from 'src/app/shared/types/tags.interface';

@Injectable()
export class GetPopularTagsEffect {
  private _actions$ = inject(Actions);
  private _tagsService = inject(PopularTagsService);

  getCurrentUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getPopularTagAction),
      switchMap(() => {
        return this._tagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagSuccess({ popularTags });
          }),
          catchError(() => of(getPopularTagFailure()))
        );
      })
    )
  );
}
