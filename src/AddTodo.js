import React from 'react'

//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components


export default ({onAddClick}) => {

    let textInput = React.createRef()

    return (
        <div>
        <input ref={textInput} />

        <button onClick={() => {
            onAddClick(textInput.current.value)
            textInput.current.value = ""
        }} > ADD TODO </button>
    </div>
    )
}

  