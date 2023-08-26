import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  deleteArticle(slug: string): Observable<null> {
    const url = `${environment.apiUrl}/article/${slug}`;

    return this.http.delete<null>(url);
  }
}
