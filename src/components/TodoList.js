import React from 'react'
import TodoListItem from "./TodoListItem";

const TodoList = ({todos}) =>
    <div>
        {
            todos.map(todo => <TodoListItem key={todo.id} {...todo}/>)
        }
    </div>;

export default TodoList
