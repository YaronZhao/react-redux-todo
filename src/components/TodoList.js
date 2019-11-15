import React from 'react'
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, removeTodo}) =>
    <div>
        {todos.map(todo =>
            <TodoListItem
                key={todo.id}
                {...todo}
                onRemove={() => removeTodo(todo.id)}
            />)
        }
    </div>;

export default TodoList
