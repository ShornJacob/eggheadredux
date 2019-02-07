import React from 'react';
import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'



export default ({ store }) => {
  //  console.log(todos)
  //  console.log(visibilityFilter)

  return (
    <div>
      <AddTodo store={store} 
      />

      <VisibleTodoList store={store}
      />

      <Footer  store={store}
      />

    </div>
  )


}
