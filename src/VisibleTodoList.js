import React, { Component } from 'react'
import TodoList from './TodoList'
import { ReactReduxContext } from 'react-redux'


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

  static contextType =  ReactReduxContext;

    componentDidMount() {
  

        const store  = this.context.store

        this.unsubscribe = store.subscribe( ()=> this.forceUpdate()  )
      }
      
      componentWillUnmount() {
        this.unsubscribe()
      }

  render() {
      
    const store  = this.context.store

    //console.log(store)
    const state = store.getState();
    //console.log(state)
    return (
      <div>
        <TodoList todos={getVisibleTodos(state.todos,state.visibilityFilter)}
                  onTodoClick= { id => store.dispatch({type : 'TOGGLE_TODO', payload : { id }})}
                  />
      </div>
    )
  }
}
