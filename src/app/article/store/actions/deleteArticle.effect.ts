import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ArticleService } from '../../article.service';
import {
  deleteArticleAction,
  deleteArticleFailure,
  deleteArticleSuccess,
} from './deleteArticle.action';
import { Router } from '@angular/router';

@Injectable()
export class deleteArticleEffect {
  private _actions$ = inject(Actions);
  private _articleService = inject(ArticleService);
  private _router = inject(Router);

  deleteArticle$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this._articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccess();
          }),
          catchError(() => of(deleteArticleFailure()))
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(deleteArticleSuccess),
        tap(() => {
          this._router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
