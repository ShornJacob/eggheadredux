import {combineReducers} from 'redux'

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
// const todoAppReducer = ( state= {}, action) => {
//     return {
//         todos : todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter : visibilityFilter(state.visibilityFilter,action)
//     }
// }

//the keys of the object, corresposinding to the fields of the state object, values are reducer funtions
// const todoAppReducer = combineReducers({
//     todos: todosReducer,
//     visibilityFilter: visibilityFilter
// })


//object literal short hand notaion
//http://www.benmvp.com/learning-es6-enhanced-object-literals/

// function getCar(make, model, value) {
// 	return {
// 		// with property value shorthand
// 		// syntax, you can omit the property
// 		// value if key matches variable
// 		// name
// 		make,  // same as make: make
// 		model, // same as model: model
//         value
//     }


const todoAppReducer = combineReducers({
  todosReducer,
  visibilityFilter
 })

export {todoAppReducer}
   