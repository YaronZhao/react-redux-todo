import {ADD_TODO, REMOVE_TODO} from "../actions/actionTypes";

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case REMOVE_TODO:
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
};

export default todos;
