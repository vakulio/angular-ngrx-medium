import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  updateArticleAction,
  updateArticleActionFailure,
  updateArticleActionSuccess,
} from './editArticle.action';
import { EditArticleService } from '../../services/edit-article.service';
import { Router } from '@angular/router';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class updateArticleEffect {
  private _actions$ = inject(Actions);
  private _updateArticleService = inject(EditArticleService);
  private _router = inject(Router);

  updateArticle$ = createEffect(() =>
    this._actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) => {
        return this._updateArticleService
          .updateArticle(slug, articleInput)
          .pipe(
            map((article: IArticle) => {
              return updateArticleActionSuccess({ article });
            }),
            catchError((errRes: HttpErrorResponse) =>
              of(updateArticleActionFailure({ errors: errRes.error.errors }))
            )
          );
      })
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(updateArticleActionSuccess),
        tap(({ article }) => {
          this._router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );
}
