import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input()
  todo: ITodo = {
    id: 0,
    title: ''
  };

  constructor(private todoService: TodoService) {}

  editTodo() {
    // const newTodo = {
    //   id: 1,
    //   title: 'modified todo'
    // };
    // this.todoService.editTodo(newTodo);
  }

  deleteTodo() {}

}
