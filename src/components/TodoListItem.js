import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({text, completed, onRemove, onToggle}) =>
    <div className="form-check pt-3">
        <input
            className="form-check-input"
            style={{display: completed ? 'none' : 'inline'}}
            type="checkbox"
            onClick={onToggle}/>
        <label
            className="form-check-label ml-2"
            style={{textDecoration: completed ? 'line-through': 'none' }}
            onClick={onToggle}>
            {text}
        </label>
        <button
            type="button"
            className="btn btn-danger btn-sm ml-5"
            onClick={onRemove}>
            Remove
        </button>
    </div>;

TodoListItem.propTypes ={
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoListItem
