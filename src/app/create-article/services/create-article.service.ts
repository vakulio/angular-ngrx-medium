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
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl = environment.apiUrl + '/articles';

    return this.http
      .post<ISaveArticleRes>(fullUrl, articleInput)
      .pipe(map((res: ISaveArticleRes) => res.article));
  }
}
