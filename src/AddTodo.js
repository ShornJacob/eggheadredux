import React, { Component } from 'react'
import StoreContext from './StoreContext'

//https://reactjs.org/docs/context.html#when-to-use-context



//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components

//decalring in inside the compaonent will cause each cokponent to have different variables holdong the same value
let nextTodoId = 0

export default class AddTodo extends Component {

    static contextType = StoreContext;


    render() {

        let textInput = React.createRef()

        const store = this.context
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
}