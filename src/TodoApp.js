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
      </div>
    );
  }
}

export {TodoApp}
