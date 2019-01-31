import React from 'react'

export default ({ onClick, completed, text }) => {
    // console.log(onClick)
    // console.log(completed)
    // console.log(text)
    return(
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
    </li>)
    
}

