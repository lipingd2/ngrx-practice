import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent {
  todoName!:string
  @Output() addTodo: EventEmitter<Todo[]> = new EventEmitter<Todo[]>()
  
  newTodo() { 
    if (this.todoName.trim() !== "") { 
      var newTodo: Todo[] = [{
        "userId": Math.ceil(Math.random() * 10000),
        "id": Math.ceil(Math.random() * 10000),
        "title": this.todoName,
        "completed": false  
      }]
      this.addTodo.emit(newTodo);
    }
  }
}
