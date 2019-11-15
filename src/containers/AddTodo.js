import React from 'react'

const AddTodo = () =>
    <div className='input-group w-50'>
        <input type="text" className="form-control" placeholder="What needs to be done?"/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Add Todo</button>
        </div>
    </div>;

export default AddTodo
