import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoService } from 'src/services/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './state/todos/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { todosEffect } from './state/todos/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToDoInputComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({todos:reducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([todosEffect]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
