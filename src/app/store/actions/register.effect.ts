import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerFailure,
  registerSuccess,
} from './register.action';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {
  private _actions$ = inject(Actions);
  private _authService = inject(AuthService);
  register$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this._authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccess({ currentUser });
          }),
          catchError((errRes: HttpErrorResponse) => of(registerFailure({errors: errRes.error.errors})))
        )
      )
    )
  );
}
