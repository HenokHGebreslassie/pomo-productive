import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.getToken() != null) {
      console.log(this.tokenService.getToken())
      const reqClone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      })
      return next.handle(reqClone)
    }
    return next.handle(request);
  }
}
