const todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO' :
        return [
            ...state,
            {
                id : action.payload.id,
                text : action.payload.text,
                completed : false
            }
        ]

        case 'TOGGLE_TODO' : 

        //The map() method creates a new array with the results of calling a provided function on every element in the calling array.
            return state.map( todo => {
                if (todo.id !== action.payload.id) {
                    return todo
                }

                return {
                    ...todo,
                    completed : !todo.completed
                }
            })
        default :
         return state
    }
   }

export {todosReducer}
   