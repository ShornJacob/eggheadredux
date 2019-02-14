import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/'


class AddTodo extends Component {


    render() {

        const dispatch  = this.props.dispatch

        let textInput = React.createRef()


        return (
            <div>
               
                <input ref={textInput} />

                <button onClick={() => dispatch(addTodo(textInput.current.value))} > ADD TODO </button>
            </div>

        )
    }
}

//store.dispatch will be now this.props.dispatch 
export default connect()(AddTodo)

//it does not need to be connected to store
//dispatch is make available as props ,if connected