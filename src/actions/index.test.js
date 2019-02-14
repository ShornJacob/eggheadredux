import {toggleTodo} from './'

test('testing Toggletodo action creator', ()=> {


    const desiredaction= {
            type : 'TOGGLE_TODO',
            payload : {
                id : 101
            }
    }

    expect(toggleTodo(101)).toMatchObject(desiredaction) 
 })
