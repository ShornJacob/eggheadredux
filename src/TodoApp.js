import React from 'react';
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'



export default () => {
  //  console.log(todos)
  //  console.log(visibilityFilter)

  return (
    <div>
      <AddTodo       />

      <VisibleTodoList       />

      <Footer        />

    </div>
  )


}
