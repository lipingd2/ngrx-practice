import { Todo } from "./todo";

export interface todoState { 
    isLoading: boolean;
    todos: Todo[];
    error:string | null
}