import {ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER} from "./actionTypes";

let newTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: ++newTodoId,
    text,
    completed: false
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

export const setVisibilityFilter = filter => ({
   type: SET_VISIBILITY_FILTER,
   filter
});
