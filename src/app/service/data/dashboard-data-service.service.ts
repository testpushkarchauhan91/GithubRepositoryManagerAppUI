import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HelloWorldBean } from 'src/app/model/HelloWorldBean';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  helloWorldBeanUrl: string = "http://localhost:8090/hello-world-bean";

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): Observable<any> {
    return this.http.get<HelloWorldBean>(this.helloWorldBeanUrl);
    //  console.log('Execute Hello World Bean Service');
  }

  // executeHelloWorldBeanServiceWithPathVariable(name): Observable<any> {
  //   let basicAuthHeaderString = this.createBasicAuthenticationHeader();
  //   let headers = new HttpHeaders({
  //     'Authorization': basicAuthHeaderString,
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.http.get<HelloWorldBean>(`http://localhost:8090/hello-world-bean/path-variable/${name}`, { headers });
  //   //  console.log('Execute Hello World Bean Service');
  // }

  executeHelloWorldBeanServiceWithPathVariable(name): Observable<any> {

    return this.http.get<HelloWorldBean>(`http://localhost:8090/hello-world-bean/path-variable/${name}`);
    //  console.log('Execute Hello World Bean Service');
  }


  // createBasicAuthenticationHeader() {
  //   let username = 'pushkar';
  //   let password = 'pushkar';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}

