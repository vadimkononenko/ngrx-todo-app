import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TODO_KEY, todoReducer } from './todo/todo.reducer';
import { ITodo } from '../model/todo';

export interface State {
  [TODO_KEY]: ITodo[]
}

export const reducers: ActionReducerMap<State> = {
  [TODO_KEY]: todoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
