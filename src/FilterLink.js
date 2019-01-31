import React from 'react'

export default ({filter,currentFilter,children,onClick}) => {
       
  // console.log(filter)
  // console.log(currentFilter)
  // console.log(children)
  //console.log(onClick)
      //return something else if a condition is matched
      if (filter === currentFilter) {
        return <span>{children}</span>
      }
    
      return (
        <button onClick= { e => {e.preventDefault();onClick(filter); }}> {children} </button>
      )
    }