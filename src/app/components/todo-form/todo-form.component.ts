import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  title = '';

  constructor(private todoService: TodoService) { }

  addTodo() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }

}
