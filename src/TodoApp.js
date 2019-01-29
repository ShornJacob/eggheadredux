import React, { Component } from 'react';


//let nextTodoId = 0

class TodoApp extends Component {
  render() {
    return (
      <div>
        {/* <button onClick= { () => {
          store.dispatch ({ 
            type : 'ADD_TODO',
            text : 'Test',
            id : nextTodoId
          })
        }}> Add Todo </button> */}
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
