import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  followUserAction,
  followUserFailure,
  followUserSuccess,
} from './addToFollow.action';
import { AddFollowService } from 'src/app/services/add-follow.service';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Injectable()
export class FollowUserEffect {
  private _actions$ = inject(Actions);
  private _followService = inject(AddFollowService);

  addFavorites$ = createEffect(() =>
    this._actions$.pipe(
      ofType(followUserAction),
      switchMap(({ slug, isFollowed }) => {
        const profile$ = isFollowed
          ? this._followService.followUser(slug)
          : this._followService.unfollowUser(slug);
        return profile$.pipe(
          map((profile: IAuthor) => {
            return followUserSuccess({ profile });
          }),
          catchError(() => of(followUserFailure()))
        );
      })
    )
  );
}
