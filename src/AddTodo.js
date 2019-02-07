import React from 'react'
import { store } from './store';

//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components

//decalring in inside the compaonent will cause each cokponent to have different variables holdong the same value
let nextTodoId = 0

export default ({onAddClick}) => {

    let textInput = React.createRef()

    return (
        <div>
        <input ref={textInput} />

        <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          payload: {
            id: nextTodoId++,
            text: textInput.current.value
          }
        })
      }} > ADD TODO </button>
    </div>
    )
}

  