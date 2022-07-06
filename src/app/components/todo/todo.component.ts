import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../../model/todo';
import { addTodo } from '../../reducers/todo/todo.actions';
import { Observable } from 'rxjs';
import { todosSelector } from '../../reducers/todo/todo.reducer';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todos$: Observable<ITodo[]>;

  title = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(todosSelector);
  }

  addTodo() {
    if(this.title) {
      const newTodo: ITodo = {
        id: Math.random() * 100,
        title: this.title
      };
      this.store.dispatch(addTodo(newTodo));
      this.title = '';
    }
  }

}
