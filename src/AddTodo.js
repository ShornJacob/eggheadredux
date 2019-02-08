import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'


let nextTodoId = 0

export default class AddTodo extends Component {


    static contextType =  ReactReduxContext;

    render() {

        const store  = this.context.store

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
}