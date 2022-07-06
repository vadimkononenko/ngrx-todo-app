import { createAction, props } from '@ngrx/store';
import { ITodo } from '../../model/todo';

export const addTodo = createAction(
  '[TODO] add todo',
  props<ITodo>()
);
export const removeTodo = createAction(
  '[TODO] remove todo',
  props<ITodo>()
);
export const editTodo = createAction(
  '[TODO] edit todo',
  props<ITodo>()
);
