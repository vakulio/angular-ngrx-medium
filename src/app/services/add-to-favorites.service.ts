import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IArticle } from '../shared/types/getFeedRes.interface';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IGetArticleRes } from '../shared/types/getArticle.inteface';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoritesService {
  constructor(private _http: HttpClient) {}

  addToFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);
    return this._http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);
    return this._http.delete(url).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: IGetArticleRes): IArticle {
    return response.article;
  }
}
