import React from 'react'
import Todo from './Todo.js'

export default ({ todos, onTodoClick }) => {

    // console.log(todos)
    // console.log(todos.length)
    // console.log(onTodoClick)
    
    //jsx list of todos
    const litodos = todos.map(todo => <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)} />)

    //console.log(litodos)

    return (
        <ul>
           {litodos}
      </ul>
    )
}
