import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  addToFavoritesAction,
  addToFavoritesFailure,
  addToFavoritesSuccess,
} from './addToFavorites.action';
import { AddToFavoritesService } from 'src/app/services/add-to-favorites.service';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';

@Injectable()
export class AddToFavoriteEffect {
  private _actions$ = inject(Actions);
  private _favoritesService = inject(AddToFavoritesService);

  addFavorites$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ slug, isFavorited }) => {
        const article$ = isFavorited
          ? this._favoritesService.removeFromFavorites(slug)
          : this._favoritesService.addToFavorites(slug);
        return article$.pipe(
          map((article: IArticle) => {
            return addToFavoritesSuccess({ article });
          }),
          catchError(() => of(addToFavoritesFailure()))
        );
      })
    )
  );
}
