import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './app.css'
import Header from './Header'
import AddTodo from '../containers/AddTodo'

const App = () =>
    <div>
        <Header/>
        <div className="container">
            <AddTodo/>
        </div>
    </div>;

export default App
