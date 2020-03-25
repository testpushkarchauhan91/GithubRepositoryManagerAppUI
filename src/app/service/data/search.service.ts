import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ALL_GIT_REPOS_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  retrieveRepos(): Observable<any> {

    // let headers = new HttpHeaders({
    //   'Authorization': TOKEN,
    //   'Access-Control-Allow-Origin': '*'
    // });

  //return this.http.get(`${ALL_GIT_REPOS_URL}`,{ headers });
  return this.http.get(`${ALL_GIT_REPOS_URL}`);
  }
  
  getData(searchData): Observable<any> {
    console.log("Service Called: " + searchData);
    return this.http.get("https://api.github.com/search/users?q="+searchData);
  }
}
