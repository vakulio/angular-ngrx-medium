import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/services/persistance.service';
import {
  getCurrentUserAction,
  getCurrentUserFailure,
  getCurrentUserSuccess,
} from './getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {
  private _actions$ = inject(Actions);
  private _authService = inject(AuthService);
  private _persistanceService = inject(PersistanceService);
  getCurrentUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this._persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailure());
        }
        return this._authService.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccess({ currentUser });
          }),
          catchError((errRes: HttpErrorResponse) => of(getCurrentUserFailure()))
        );
      })
    )
  );
}
