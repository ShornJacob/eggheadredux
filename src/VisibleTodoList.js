import TodoList from './TodoList'
import { connect } from 'react-redux'

//VisibletodoList is a container component for TodoList

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }
  

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    onTodoClick : (id) => dispatch({type : 'TOGGLE_TODO', payload : { id } })   
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TodoList)

//connect says what is needed to be made vaialble to secibnd ()
//curried - first () returns another function which accpets visibleTodoListy

