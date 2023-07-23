import { Injectable } from '@angular/core';
import { IRegReq } from '../shared/types/registerReq.interface';
import { ICurrentUser } from '../shared/types/currentUser.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAuthResponse } from '../shared/types/authResponse.interface';
import { HttpClient } from '@angular/common/http';
import { ILogReq } from '../shared/types/loginReq.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegReq): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users`;
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILogReq): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users/login`;
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/user`;
    return this.http.get(url).pipe(map(this.getUser));
  }
}
