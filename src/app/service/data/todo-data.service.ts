import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/model/Todo';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  username: string;

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username): Observable<any> {
 // return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    //  console.log('Execute Hello World Bean Service');
  }

  deleteTodo(username, id) {
 // return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`);
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
 // return this.http.get<Todo>(`http://localhost:8090/users/${username}/todos/${id}`);
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
//  return this.http.put(`http://localhost:8090/users/${username}/todos/${id}`, todo);
  return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
 //   username = sessionStorage.getItem('username');
    console.log('Printing username in createTodo ' + username);
 // return this.http.post(`http://localhost:8090/users/${username}/todos`, todo);
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
