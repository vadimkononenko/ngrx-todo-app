import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../model/todo';
import { addTodo } from '../reducers/todo/todo.actions';
import { Observable } from 'rxjs';
import { todosSelector } from '../reducers/todo/todo.reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos$: Observable<ITodo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(todosSelector);
  }

  get getTodos(): Observable<ITodo[]> {
    return this.todos$;
  }

  addTodo(title: string) {
    if(title) {
      const newTodo: ITodo = {
        id: Math.random() * 1000,
        title: title
      };
      this.store.dispatch(addTodo(newTodo));
    }
  }
}
