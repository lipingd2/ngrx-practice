import { createAction, props } from "@ngrx/store";
import { Todo } from "src/app/interfaces/todo";
import { todoState } from "src/app/interfaces/todoState";

export const getTodos = createAction('[Todos] get todos')

export const getTodosSuccess = createAction('[Todos] get todos success', props<{ todos: Todo[] }>());

export const getTodosFailure = createAction('[Todos] get todos failure', props<{ error: string }>());

export const removeTodo = createAction('[Todos] delete todo', props<{ uid: number }>());

export const changeTodoComplete = createAction('[Todos] change todo complete status', props<{ uid: number }>());

export const addTodo = createAction('[Todo] add todo', props<{ todo: Todo[] }>());