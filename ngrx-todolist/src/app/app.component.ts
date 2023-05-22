import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoService } from 'src/services/todo.service';
import { Todo } from './interfaces/todo';
import { Store, select } from '@ngrx/store';
import * as todoActions from '../app/state/todos/todo.actions'
import { appState } from './interfaces/appState';
import { errorSelector, isLoadingSelector, todoSelector } from './state/todos/todo.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-todolist';
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  todoList$!:Observable<Todo[]>
  constructor(private store:Store<appState>, private todoService:TodoService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.todoList$ = this.store.pipe(select(todoSelector))
  }
  ngOnInit() { 
    this.store.dispatch(todoActions.getTodos());

    // this.todoList$ = this.todoService.todoList$
    // this.todoService.getTodo().subscribe();
  }

  addNewTodo(todo: Todo[]) { 
    this.store.dispatch(todoActions.addTodo({ todo }))
    // this.todoService.todoList = [...todo, ...this.todoService.todoList]
    // this.todoList$.next(this.todoService.todoList)
  }
  changeComp(uid: number) {
    this.store.dispatch(todoActions.changeTodoComplete({uid}))
    // this.todoService.todoList.forEach((todo: Todo) => {
    //   if (todo.id === uid) { 
    //     console.log(todo.id, uid)
    //     todo.completed = !todo.completed
    //   }
    // })
    // this.todoList$.next(this.todoService.todoList)
  }
  deleteTodo(uid: number) {
    this.store.dispatch(todoActions.removeTodo({ uid }));
    // this.todoService.todoList = this.todoService.todoList.filter(todo => todo.id !== uid)
    // this.todoService.todoList$.next(this.todoService.todoList)

  }
}
