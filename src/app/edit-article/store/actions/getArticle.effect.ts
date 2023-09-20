import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';
import { ArticleService } from 'src/app/services/article.service';
import {
  getArticleAction,
  getArticleActionFailure,
  getArticleActionSuccess,
} from './getArticle.action';

@Injectable()
export class getArticleEffect {
  private _actions$ = inject(Actions);
  private _articleService = inject(ArticleService);

  getArticle$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this._articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleActionSuccess({ article });
          }),
          catchError(() => of(getArticleActionFailure()))
        );
      })
    )
  );
}
