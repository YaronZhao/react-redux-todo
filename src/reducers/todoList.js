import {ADD_TODO, REMOVE_TODO} from "../actions/actionTypes";

const todoList = (state = {todos: [], activeCount: 0}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: action.completed
                    }
                ],
                activeCount: state.activeCount + 1
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(t => t.id !== action.id),
                activeCount: state.activeCount - 1
            };
        default:
            return state;
    }
};

export default todoList;
