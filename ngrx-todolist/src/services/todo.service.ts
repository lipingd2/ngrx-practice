import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todoList:Todo[] = []
  todoList$:BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  constructor(private http: HttpClient) { }
  
  getTodo() { 
    return this.http.get<Todo[]>(this.baseUrl).pipe(
      tap((data:Todo[]) => {
        console.log(data)
        this.todoList = data
        this.todoList$.next(data);
      })
    )
  }
}
