import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import {
  updateCurrentUserAction,
  updateCurrentUserFailure,
  updateCurrentUserSuccess,
} from './updateCurrentUser.action';

@Injectable()
export class UpdateCurrentUserEffect {
  private _actions$ = inject(Actions);
  private _authService = inject(AuthService);
  updateCurrentUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this._authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: ICurrentUser) => {
            return updateCurrentUserSuccess({ currentUser });
          }),
          catchError((errRes: HttpErrorResponse) =>
            of(updateCurrentUserFailure({ errors: errRes.error.errors }))
          )
        );
      })
    )
  );
}
