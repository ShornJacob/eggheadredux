//import Link from './Link'
//import { setVisibilityFilter } from './actions/'
//import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'


const FilterLink = ({filter , children}) => {

 // console.log(filter)
  //console.log(children)

  return (
    <Link  to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}>{children}</Link>
  )
  
  }

//FilterLink is a container component that provides props and state to Link

// const mapStatetoProps = (state, props) => ({ 
//   active: props.filter === state.visibilityFilter 
// })


// const mapDispatchtoProps = (dispatch, props) => ({
//   onClick: () => dispatch(setVisibilityFilter(props.filter))
// })

//Link will recieve active and onlick values
export default (FilterLink)
