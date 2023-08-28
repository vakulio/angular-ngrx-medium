import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  createArticleAction,
  createArticleActionFailure,
  createArticleActionSuccess,
} from './createArticle.action';
import { CreateArticleService } from '../../services/create-article.service';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CreateArticleEffect {
  private _actions$ = inject(Actions);
  private _createArticleService = inject(CreateArticleService);
  private _router = inject(Router);

  createArticle$ = createEffect(() =>
    this._actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this._createArticleService.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            return createArticleActionSuccess({ article });
          }),
          catchError((errRes: HttpErrorResponse) =>
            of(createArticleActionFailure({ errors: errRes.error.errors }))
          )
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(createArticleActionSuccess),
        tap(({ article }) => {
          this._router.navigate(['/article', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
