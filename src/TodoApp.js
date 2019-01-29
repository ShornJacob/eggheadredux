import React, { Component } from 'react';

import {store} from './store.js'

let nextTodoId = 200

class TodoApp extends Component {

  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  render() {
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
          console.log( this.textInput.current.value)
          //reset after dispatching
          this.textInput.current.value = ''
        }}> Add Todo </button>
        Todo
        <ul>
          {console.log(this.props)}
          {this.props.todos.map(todo => 
            <li key={todo.id}>
                {todo.text}
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export {TodoApp}
