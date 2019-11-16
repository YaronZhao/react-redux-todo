import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "../actions/actionTypes";

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
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo =>
                    (todo.id === action.id ?
                        {...todo, completed: !todo.completed} : todo)),
                activeCount: state.activeCount +
                    (state.todos.find(todo => todo.id === action.id).completed ? 1 : -1)
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(t => t.id !== action.id),
                activeCount: state.activeCount -
                    (state.todos.find(todo => todo.id === action.id).completed ? 0 : 1)
            };
        default:
            return state;
    }
};

export default todoList;
