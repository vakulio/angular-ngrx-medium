import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersistanceService } from '../services/persistance.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  _persistance = inject(PersistanceService);
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._persistance.get('accessToken')
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ``
      }
    });

    return next.handle(request);
  }
}
