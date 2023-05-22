import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoService } from 'src/services/todo.service';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-todolist';
  todoList$!:BehaviorSubject<Todo[]>
  constructor(private todoService:TodoService) {

  }
  ngOnInit() { 
    this.todoList$ = this.todoService.todoList$
    this.todoService.getTodo().subscribe();
  }

  addNewTodo(todo:Todo[]) { 
    this.todoService.todoList = [...todo, ...this.todoService.todoList]
    this.todoList$.next(this.todoService.todoList)
  }
  changeComp(uid: number) {
    this.todoService.todoList.forEach((todo: Todo) => {
      if (todo.id === uid) { 
        console.log(todo.id, uid)
        todo.completed = !todo.completed
      }
    })
    this.todoList$.next(this.todoService.todoList)
  }
  deleteTodo(uid: number) {
    this.todoService.todoList = this.todoService.todoList.filter(todo => todo.id !== uid)
    this.todoService.todoList$.next(this.todoService.todoList)

  }
}
