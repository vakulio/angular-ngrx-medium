import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IAuthor } from 'src/app/shared/types/author.interface';
import { IGetUserProfile } from 'src/app/shared/types/getUserProfile.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IAuthor> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get(url).pipe(map((res: IGetUserProfile) => res.profile));
  }
}
