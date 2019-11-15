import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

let newTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: ++newTodoId,
    text
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});
