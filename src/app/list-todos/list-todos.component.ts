import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { DatePipe } from '@angular/common';
import { TodoDataService } from 'src/app/service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  message: string;

  /*
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]
  */

  /*
  todo = {
    id: 1,
    description: 'Learn to Dance'
  }
  */

  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('pushkar').subscribe(
      response => {
       // console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.service.deleteTodo('pushkar', id).subscribe(
      response => {
     // console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
