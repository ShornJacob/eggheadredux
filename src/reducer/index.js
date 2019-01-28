//Reducer Composition Pattern
//In todo, the state received is each todo of the todosREducer, called when action is ToGGLE_TODO

///Recuer compoaostion, different reducer specify ho diferent parts of state can change
//Main reduce calls another reducers, javascript function calls.

//state is a ToDo Object
const todoReducer = (state,action) => {
    switch(action.type) {
        case 'TOGGLE_TODO' :
         if( state.id!== action.payload.id) {
             return state;
         }

         return {
             ...state,
             completed: !state.completed
         }

         default:
          return state
    }
}



//state is aray of objects
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

            return state.map( todo => todoReducer(todo,action) )

        default :
         return state
    }
   }

   const visibilityFilter = ( state = "SHOW_ALL" ,action) => {
       switch (action.type) {
           case 'SET_VISIBILITY_FILTER':
            return action.payload.filter
            default:
                return state
       }
   }

//when an action comes in ,call a reducer with a part of the state that they manage and the action
const todoAppReducer = ( state= {}, action) => {
    return {
        todos : todos(
            state.todos,
            action
        ),
        visibilityFilter : visibilityFilter(state.visibilityFilter,action)
    }
}

export {todosReducer}
   