import { createReducer, on } from "@ngrx/store";
import { todoState } from "src/app/interfaces/todoState";
import * as todoActions from './todo.actions'
import { Todo } from "src/app/interfaces/todo";

export const initialsState: todoState = {
    isLoading: false,
    todos: [],
    error:null
}

export const reducers = createReducer(initialsState, on(todoActions.getTodos, (state) => ({ ...state, isLoading: true })),
on(todoActions.getTodosSuccess, (state, action) => ({ ...state, isLoading: false, todos:action.todos })),
    on(todoActions.getTodosFailure, (state, action) => ({ ...state, isLoading: false, error: action.error })),
    on(todoActions.removeTodo, (state, action) => { 
        var newtodo = state.todos.filter(todo => todo.id !== action.uid)
        return {...state, todos: newtodo}
    }),
    on(todoActions.changeTodoComplete, (state, action) => {
        var pre = []
        var newval = []
        var after = []
        for (let i = 0; i < state.todos.length; i++) { 
            if (state.todos[i].id === action.uid) { 
                newval.push(JSON.parse(JSON.stringify(state.todos[i])))
                continue
            }
            if (newval.length === 0) {
                pre.push(state.todos[i])
            } else { 
                after.push(state.todos[i])
            }
        }
        newval[0].completed = !newval[0].completed
        return {...state, todos:[...pre, ...newval, ...after]}
    }),
    on(todoActions.addTodo, (state, action) => {
        var newState = [...action.todo, ...state.todos]
        return {...state, todos:newState}
    })
);