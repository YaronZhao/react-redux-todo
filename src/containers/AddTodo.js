import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../actions";

const AddTodo = ({dispatch}) => {
    let textInput = React.createRef();

    return (
        <div className='input-group w-50'>
            <input
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                ref={textInput}/>
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => dispatch(addTodo(textInput.current.value()))}>
                    Add Todo
                </button>
            </div>
        </div>
    )
};

export default connect()(AddTodo)
