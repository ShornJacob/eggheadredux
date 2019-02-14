import {combineReducers} from 'redux'

//reducer composition
const todoReducer = (state,action) => {
    switch(action.type) {
        case 'TOGGLE_TODO' :
          //while itereting, if id not belonging tothis todo, return the same state and quit
         if( state.id!== action.payload.id) {
             return state;
         }

         //else, new object, 
         return {
             ...state,
             completed: !state.completed
         }

         default:
          return state
    }
}


//state is aray of objects
const todosReducer = (state = [{id:101,text:"Hello",completed:false}], action) => {
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
          //pass to each array item of state todos, the smaller reducer and the action for this action
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



const todoAppReducer = combineReducers({
  todos : todosReducer,
  visibilityFilter
 })

export {todoAppReducer,todosReducer,todoReducer}
   