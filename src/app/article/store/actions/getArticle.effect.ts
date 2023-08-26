import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getArticleAction,
  getArticleFailure,
  getArticleSuccess,
} from './getArticle.action';
import { ArticleService } from 'src/app/services/article.service';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

@Injectable()
export class GetArticleEffect {
  private _actions$ = inject(Actions);
  private _articleService = inject(ArticleService);

  getArticle$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this._articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccess({ article });
          }),
          catchError(() => of(getArticleFailure()))
        );
      })
    )
  );
}
