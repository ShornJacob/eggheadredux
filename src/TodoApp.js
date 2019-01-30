import React, { Component } from 'react';

import {store} from './store.js'

const FilterLink = ({filter,children}) => {
  return (
    <button onClick= { e => {
      e.preventDefault()
      //payload:{filter} equalnet to pauload:{filter:filter}
      store.dispatch({type: 'SET_VISIBILITY_FILTER',payload:{filter}})
    }} > {children} </button>
  )
}


const getVisibleTodos = (todos,filter) => {
  switch(filter) {
    case 'SHOW_ALL' :
      return todos;
    case 'SHOW_ACTIVE' :
      return todos.filter( todo => !todo.completed )
    case 'SHOW_COMPLETED' :
      return todos.filter( todo => todo.completed)
    default:
      return todos
  }
}

let nextTodoId = 200

class TodoApp extends Component {

  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  render() {

    //functions needs to be called in render before return

    const visibleTodos = getVisibleTodos(this.props.todos,  this.props.visibilityFilter  )
    return (
      <div>
        <input ref={this.textInput} />
        <button onClick= { () => {
          store.dispatch ({ 
            type : 'ADD_TODO',
            payload : {
              text : this.textInput.current.value,
              id : nextTodoId++
            }          
          })
          //console.log( this.textInput.current.value)
          //reset after dispatching
          this.textInput.current.value = ''
        }}> Add Todo </button>
        Todo
        <ul>
          {/* {console.log(this.props)} */}
          {visibleTodos.map(todo => 
            <li key={todo.id}
              //onclick, set style to underline
                onClick={ () => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    payload: {
                      id : todo.id
                    }
                    
                  })
                  //https://www.w3schools.com/jsref/prop_style_textdecoration.asp
                }} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </li>
            )}
        </ul>
        <p>
          Show:

          {/* <Anything inside the <></>JSX tag gets passed into the FancyBorder component as a children prop */}
          <FilterLink filter="SHOW_ALL">All</FilterLink><br/>
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
          <FilterLink filter="SHOW_COMPLETED">Show Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export {TodoApp}
