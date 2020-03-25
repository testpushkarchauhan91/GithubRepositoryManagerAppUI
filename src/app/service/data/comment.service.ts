import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  name: string;
  constructor(private http: HttpClient) {
    this.name = sessionStorage.getItem('name');
  }

  getAllComments(username): Observable<any> {
    return this.http.get("http://localhost:8081/comment/");
  }

  deleteComment(id) {
    let headers = new HttpHeaders({
      'Accept': 'text/plain'
    });

    return this.http.delete("http://localhost:8081/comment/" + id + "/",{headers,responseType:'text'});
  }

  getComment(id): Observable<any> {
    console.log("service called.......");
    return this.http.get("http://localhost:8081/comment/" + id + "/");
  }

  updateComment(username, id, comment) {
    return this.http.put("http://localhost:8081/comment/" + id + "/", comment);
  }

  postComment(comment) {
    return this.http.post("http://localhost:8081/comment/", comment);
  }

}
