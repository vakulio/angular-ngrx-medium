import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetFeedRes } from '../shared/types/article.interface';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private http = inject(HttpClient);

  getFeed(url: string): Observable<IGetFeedRes> {
    const fullUrl = `${environment.apiUrl}${url}`;

    return this.http.get<IGetFeedRes>(fullUrl);
  }
}
