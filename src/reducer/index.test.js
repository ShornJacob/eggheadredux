import {todosReducer} from './index.js'
import {toggleTodo} from '../actions'

test('testing Todos', ()=> {
    const action = {
       type : 'ADD_TODO',
       payload : {
          id : 101,
          text : 'A text'
       }
    }

    const stateAfter = [
      {id:101,text:"Hello",completed:false},
       {
         id : 101,
         text : 'A text',
         completed : false
       }
    ]
    expect(todosReducer(undefined,action)).toMatchObject(stateAfter) 
 })


 test('testing Toggle Todos', ()=> {

   const stateBefore = [
      {
         id: 101,
         text: 'LEarn Redux',
         completed: false
      }
   ]

   const stateAfter = [
      {
        id : 101,
        text : 'LEarn Redux',
        completed : true
      }
   ]
   expect( todosReducer(stateBefore,toggleTodo(101))).toMatchObject(stateAfter) 

})

 