import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerFailure,
  registerSuccess,
} from './register.action';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/services/persistance.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  private _actions$ = inject(Actions);
  private _authService = inject(AuthService);
  private _persistanceService = inject(PersistanceService);
  private _router = inject(Router);
  register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this._authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this._persistanceService.set('accessToken', currentUser.token);
            return registerSuccess({ currentUser });
          }),
          catchError((errRes: HttpErrorResponse) =>
            of(registerFailure({ errors: errRes.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterRegister$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(registerSuccess),
        tap(() => {
          console.log('Success');
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
