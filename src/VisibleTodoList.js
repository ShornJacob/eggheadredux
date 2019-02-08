import React, { Component } from 'react'
import TodoList from './TodoList'
import StoreContext from './StoreContext'

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
  
export default class VisibleTodoList extends Component {

    //cant decalre a const varaible outside
    //JS cant have fields. It is prototype base
   
    static contextType = StoreContext;

    componentDidMount() {
  
        const store  = this.context

        this.unsubscribe = store.subscribe( ()=> this.forceUpdate()  )
      }
      
      componentWillUnmount() {
        this.unsubscribe()
      }

  render() {
      
    const store  = this.context
    const state = store.getState();

    return (
      <div>
        <TodoList todos={getVisibleTodos(state.todos,state.visibilityFilter)}
                  onTodoClick= { id => store.dispatch({type : 'TOGGLE_TODO', payload : { id }})}
                  />
      </div>
    )
  }
}
