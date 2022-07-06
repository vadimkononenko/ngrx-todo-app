import { ITodo } from '../../model/todo';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addTodo, editTodo, removeTodo } from './todo.actions';

export const TODO_KEY = 'todo';

export const initialState: ITodo[] = [
  {id: 1, title: 'first'},
  {id: 2, title: 'second'},
];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, action) => {
    const todos: ITodo[] = JSON.parse(JSON.stringify(state));
    todos.push(action);
    return todos;
  }),
  on(removeTodo, (state, action) => {
    const todos: ITodo[] = JSON.parse(JSON.stringify(state));
    return todos.filter((item) => item.id !== action.id);
  }),
  on(editTodo, (state, action) => {
    const todos: ITodo[] = JSON.parse(JSON.stringify(state));
    todos.map((item) => {
      if(item.id === action.id) {
        item.title = action.title
      }
    });
    return todos;
  })
);

export const featureSelector = createFeatureSelector<ITodo[]>(TODO_KEY);
export const todosSelector = createSelector(
  featureSelector,
  state => {
    return JSON.parse(JSON.stringify(state));
  }
);
