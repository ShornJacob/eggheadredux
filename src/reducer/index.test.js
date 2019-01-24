import {counter} from './index'

test('counter', ()=> {
   expect( counter(0, {type: 'INCREMENT'}) ).toBe(0)
})