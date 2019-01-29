Made a todoapp component

Doesnt use store Provider

But store subscribes to a render method

render returns a functon

//index.js
const render = () => {
  ReactDOM.render(
      <TodoApp todos={store.getState().todosReducer} />,
      document.getElementById('root')
  )
}

render()

store.subscribe(render)

/TodoApp.js

store is now imported inot the file and dispatch is used in component
 <button onClick= { () => {
          store.dispatch ({ 
            type : 'ADD_TODO',
            payload : {
              text : 'Added',
              id : nextTodoId++
            }
           
          })