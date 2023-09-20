import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  IArticleInput,
  ISaveArticleRes,
} from 'src/app/shared/types/articleInput.interface';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: IArticleInput
  ): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<ISaveArticleRes>(fullUrl, articleInput)
      .pipe(map((res: ISaveArticleRes) => res.article));
  }
}
