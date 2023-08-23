import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PopularTagType } from '../shared/types/tags.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { getPopularTagsI } from '../shared/types/getPopularTags.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;

    return this.http.get(url).pipe(
      map((res: getPopularTagsI) => {
        return res.tags;
      })
    );
  }
}
