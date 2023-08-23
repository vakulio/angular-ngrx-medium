import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FeedService } from 'src/app/services/feed-service.service';
import {
  getFeedAction,
  getFeedFailure,
  getFeedSuccess,
} from './getFeed.action';
import { IGetFeedRes } from 'src/app/shared/types/article.interface';

@Injectable()
export class GetFeedEffect {
  private _actions$ = inject(Actions);
  private _feedService = inject(FeedService);

  getCurrentUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this._feedService.getFeed(url).pipe(
          map((feed: IGetFeedRes) => {
            return getFeedSuccess({ feed });
          }),
          catchError((errRes: HttpErrorResponse) => of(getFeedFailure()))
        );
      })
    )
  );
}
