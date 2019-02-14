import React from 'react'

export default ({active,children,onClick}) => {

  //console.log(active)
  //console.log(children)
  //console.log(onClick)
      //return something else if a condition is matched
      if (active) {
        return <span>{children}</span>
      }
    
      return (
        <button disabled={active} onClick={onClick}> {children} </button>
      )
    }

//FilterLink connects it to store and its props