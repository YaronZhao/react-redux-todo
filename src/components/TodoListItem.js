import React from 'react'

const TodoListItem = ({text, onRemove}) =>
    <div className="form-check pt-3">
        <input className="form-check-input" type="checkbox"/>
        <label className="form-check-label ml-2">{text}</label>
        <button
            type="button"
            className="btn btn-danger btn-sm ml-4"
            onClick={onRemove}>
            Remove
        </button>
    </div>;

export default TodoListItem
