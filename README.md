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
