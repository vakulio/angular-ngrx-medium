import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getUserProfileAction,
  getUserProfileFailure,
  getUserProfileSuccess,
} from './getUserProfile.action';
import { UserProfileService } from '../../services/user-profile.service';
import { IAuthor } from 'src/app/shared/types/author.interface';

@Injectable()
export class GetUserProfileEffect {
  private _actions$ = inject(Actions);
  private _userProfileService = inject(UserProfileService);

  getUserProfile$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this._userProfileService.getUserProfile(slug).pipe(
          map((userProfile: IAuthor) => {
            return getUserProfileSuccess({ userProfile });
          }),
          catchError(() => of(getUserProfileFailure()))
        );
      })
    )
  );
}
