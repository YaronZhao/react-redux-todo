import {connect} from 'react-redux'
import TodoList from "../components/TodoList";
import {removeTodo, toggleTodo} from "../actions";
import {VisibilityFilters} from "../actions";

const getVisibleTodosByFilter = (todos, filter) => {
  switch (filter) {
      case VisibilityFilters.SHOW_ALL:
          return todos;
      case VisibilityFilters.SHOW_ACTIVE:
          return todos.filter(todo => !todo.completed);
      case VisibilityFilters.SHOW_COMPLETED:
          return todos.filter(todo => todo.completed);
      default:
          throw new Error('Unknown filter');
  }
};

const mapStateToProps = state => ({
    todos: getVisibleTodosByFilter(state.todoList.todos, state.visibilityFilter)
});

export default connect(
    mapStateToProps,
    { removeTodo, toggleTodo }
)(TodoList)
