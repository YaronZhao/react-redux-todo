import { ADD_TODO } from "./actionTypes";

let newTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: ++newTodoId,
    text
});
