import { Injectable } from '@angular/core';
import { IRegReq } from '../shared/types/registerReq.interface';
import { ICurrentUser } from '../shared/types/currentUser.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAuthResponse } from '../shared/types/authResponse.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegReq): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users`;
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((res: IAuthResponse) => res.user));
  }
}
