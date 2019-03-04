import React from 'react';
import  AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'



export default ({match : { params} }) => {
  //  console.log(todos)
   console.log(params.filter)

  return (
    <div>
      <AddTodo       />

      <VisibleTodoList   filter={params.filter || 'SHOW_ALL'}   />

      <Footer        />

    </div>
  )


}
