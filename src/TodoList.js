import React from 'react'
import Todo from './Todo.js'

export default ({todos,onTodoClick}) => {
    
    // console.log(todos)
    // console.log(todos.length)
    // console.log(onTodoClick)


    
    return(
    <ul>
        {/* Todo returns a <li></li> */}
        {todos.map ( todo => <Todo 
                            key={todo.id}
                            {...todo}
                            onClick={ ()=> onTodoClick(todo.id)} /> )}
        
      </ul>
    )
}
