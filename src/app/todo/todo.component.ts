import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/service/data/todo-data.service';
import { Todo } from 'src/app/model/Todo';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: any;
  todo: Todo;

  constructor(private service: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id !== -1) {
      this.service.retrieveTodo('pushkar', this.id).subscribe(data => {
        this.todo = data;
      }
      );
    }

  }

  saveTodo() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id === -1) {
      this.service.createTodo('pushkar', this.todo).subscribe((response) => {
        console.log(response);
        this.router.navigate(['todos']);
      });

    } else {
      console.log('next');
      this.service.updateTodo('pushkar', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }


}
