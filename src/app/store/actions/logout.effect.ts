import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersistanceService } from 'src/app/services/persistance.service';

import { logoutAction } from './sync.action';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LogoutEffect {
  private _actions$ = inject(Actions);
  private _persistanceService = inject(PersistanceService);
  private _router = inject(Router);
  logout$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this._persistanceService.set('accessToken', '');
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
