let nextTodoId = 1

const addTodo = (text) => {
    return {
        type : 'ADD_TODO',
        payload : {
            id: nextTodoId++,
            text
        }
        
    }
}

const setVisibilityFilter = (filter) => {

    //console.log(filter)
    return {
        type : 'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    }
}

const toggleTodo = (id) => {

    //console.log(id)
    return {
        type : 'TOGGLE_TODO',
        payload : {
            id
        }
    }
}


export {addTodo, setVisibilityFilter, toggleTodo}
