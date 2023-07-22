import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/services/persistance.service';
import { Router } from '@angular/router';
import { loginAction, loginFailure, loginSuccess } from './login.action';

@Injectable()
export class LoginEffect {
  private _actions$ = inject(Actions);
  private _authService = inject(AuthService);
  private _persistanceService = inject(PersistanceService);
  private _router = inject(Router);
  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) =>
        this._authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this._persistanceService.set('accessToken', currentUser.token);
            return loginSuccess({ currentUser });
          }),
          catchError((errRes: HttpErrorResponse) =>
            of(loginFailure({ errors: errRes.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          console.log('Success');
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
