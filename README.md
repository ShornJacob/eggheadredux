index.js


const render = () => {


  ReactDOM.render(
    //https://zhenyong.github.io/react/docs/jsx-spread.html
    //JSX Spread Attribute
      <TodoApp />,
      document.getElementById('root')
  )
}

Todo takes no props

TodoApp

 return (
    <div>
      <AddTodo />

      <VisibleTodoList
      />

      <Footer  />

    </div>
  )

these three coponnets dont take props. they call store on there own