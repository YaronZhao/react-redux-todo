import React from 'react'
import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

const TodoList = ({todos, removeTodo, toggleTodo}) =>
    <div>
        {todos.map(todo =>
            <TodoListItem
                key={todo.id}
                {...todo}
                onRemove={() => removeTodo(todo.id)}
                onToggle={() => toggleTodo(todo.id)}
            />)
        }
    </div>;

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList
