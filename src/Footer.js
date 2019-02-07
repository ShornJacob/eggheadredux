import React from 'react'
import FilterLink from './FilterLink'

export default ({store}) => {
    
    // console.log(visibilityFilter)
    //console.log(onFilterClick)

    return(
    <div>
         <FilterLink filter="SHOW_ALL" store={store}>All</FilterLink><br/>
         <FilterLink filter="SHOW_ACTIVE" store={store}>Active</FilterLink>
         <FilterLink filter="SHOW_COMPLETED" store={store}>Show Completed</FilterLink>
    </div>
)}
