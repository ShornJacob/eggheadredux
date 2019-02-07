import React from 'react'
import FilterLink from './FilterLink'

export default () => {
    
    // console.log(visibilityFilter)
    //console.log(onFilterClick)

    return(
    <div>
         <FilterLink filter="SHOW_ALL" >All</FilterLink><br/>
         <FilterLink filter="SHOW_ACTIVE" >Active</FilterLink>
         <FilterLink filter="SHOW_COMPLETED" >Show Completed</FilterLink>
    </div>
)}
