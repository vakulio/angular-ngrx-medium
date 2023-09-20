import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAuthor } from '../shared/types/author.interface';
import { environment } from 'src/environments/environment.development';
import { IGetUserProfile } from '../shared/types/getUserProfile.interface';

@Injectable({
  providedIn: 'root',
})
export class AddFollowService {
  constructor(private _http: HttpClient) {}

  followUser(slug: string): Observable<IAuthor> {
    const url = this.getUrl(slug);
    return this._http.post(url, {}).pipe(map(this.getAuthor));
  }

  unfollowUser(slug: string): Observable<IAuthor> {
    const url = this.getUrl(slug);
    return this._http.delete(url).pipe(map(this.getAuthor));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/profiles/${slug}/follow`;
  }

  getAuthor(response: IGetUserProfile): IAuthor {
    return response.profile;
  }
}
