import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos$: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos;
  }

}
