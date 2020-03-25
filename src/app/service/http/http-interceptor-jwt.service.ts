// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
// import { JwtAuthenticationService } from '../jwt-authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpInterceptorJWTService {

//   constructor(private jwtAuthService: JwtAuthenticationService) { }

//   //JWT Interceptor
//   intercept(req: HttpRequest<any>, next: HttpHandler) {

//     if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
//       console.log("=======Interceptor HttpInterceptorJWTService========");
//       console.log(sessionStorage.getItem('token'));
//       console.log("==========================================================");
//       req = req.clone({
//         setHeaders: {
//           'Authorization': sessionStorage.getItem('token'),
//           'Access-Control-Allow-Origin': '*'
//         }
//       })
//     }

//     return next.handle(req);
//   }

// }







import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorJWTService implements HttpInterceptor {

  authHeader;

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = sessionStorage.getItem("token");
    console.log("Interceptor comment start.............");
    console.log(idToken);
    console.log("Interceptor comment end.............");
    if (idToken) {
      const cloned = req.clone({
         headers: req.headers.set("Authorization",
           "Bearer " + idToken).set("Access-Control-Allow-Origin","*")
      })
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}

