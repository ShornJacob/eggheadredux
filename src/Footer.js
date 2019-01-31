import React from 'react'
import FilterLink from './FilterLink'

export default ({visibilityFilter,onFilterClick}) => {
    
    // console.log(visibilityFilter)
    //console.log(onFilterClick)

    return(
    <div>
         <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>All</FilterLink><br/>
         <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>Active</FilterLink>
         <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>Show Completed</FilterLink>
    </div>
)}
