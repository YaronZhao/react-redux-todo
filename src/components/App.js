import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './app.css'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import TodoListItem from './TodoListItem'

const App = () =>
    <div>
        <Header/>
        <div className="container">
            <AddTodo/>
            <TodoListItem/>
        </div>
    </div>;

export default App
