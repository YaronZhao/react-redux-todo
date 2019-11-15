import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './app.css'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () =>
    <div>
        <Header/>
        <div className="container">
            <AddTodo/>
            <VisibleTodoList/>
        </div>
    </div>;

export default App
