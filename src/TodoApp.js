import React, { Component } from 'react';

import {store} from './store.js'

let nextTodoId = 200

class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick= { () => {
          store.dispatch ({ 
            type : 'ADD_TODO',
            payload : {
              text : 'Added',
              id : nextTodoId++
            }
           
          })
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
