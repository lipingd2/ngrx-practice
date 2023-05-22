import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as todoActions from './todo.actions'
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";
import { TodoService } from "src/services/todo.service";
import { Todo } from "src/app/interfaces/todo";

@Injectable()
export class todosEffect {
    loadTodos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(todoActions.getTodos),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.todoService.getTodo()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((todos) => todoActions.getTodosSuccess({ todos: todos })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(todoActions.getTodosFailure({ error })))
        )
      )
    )
});
    constructor(private action$:Actions, private todoService:TodoService) {}
 }