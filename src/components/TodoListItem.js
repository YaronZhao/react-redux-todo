import React from 'react'

const TodoListItem = ({text}) =>
    <div className="form-check pt-3">
        <input className="form-check-input" type="checkbox"/>
        <label className="form-check-label ml-2">{text}</label>
    </div>;

export default TodoListItem
