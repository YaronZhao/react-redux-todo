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

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
