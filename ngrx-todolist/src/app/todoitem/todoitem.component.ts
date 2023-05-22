import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo!: Todo
  @Output() changeStatus: EventEmitter<number> = new EventEmitter<number>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  

  get style() { 
    return this.todo.completed ? {'text-decoration': ' line-through'}: {'text-decoration': ' none'}
  }

  isDone() { 
    this.changeStatus.emit(this.todo.id)
  }
  delete() { 
    this.deleteTodo.emit(this.todo.id)
  }
}
