import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthenticationService) { }

  // intercept(request: HttpRequest<any>, next: HttpHandler) {
  //   let username = 'pushkar';
  //   let password = 'pushkar';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   request = request.clone({
  //     setHeaders: {
  //       'Authorization': basicAuthHeaderString,
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   });

  //   return next.handle(request);
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          'Authorization': basicAuthHeaderString,
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return next.handle(request);
  }
}
