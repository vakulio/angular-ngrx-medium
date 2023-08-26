import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IGetArticleRes } from '../shared/types/getArticle.inteface';
import { environment } from 'src/environments/environment.development';
import { IArticle } from '../shared/types/getFeedRes.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<IGetArticleRes>(fullUrl).pipe(
      map((res: IGetArticleRes) => {
        return res.article;
      })
    );
  }
}
