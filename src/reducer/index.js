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

export {todosReducer}
   