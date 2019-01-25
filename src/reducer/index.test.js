import {counter} from './index'

// test('counter', ()=> {
//    expect( counter(0, {type: 'INCREMENT'}) ).toBe(0)
// })

test('test increment', ()=> {
    expect( counter(1, {type: 'INCREMENT'}) ).toBe(2)
 })

 test('test decrement', ()=> {
    expect( counter(2, {type: 'DECREMENT'}) ).toBe(1)
 })

 test('test no initialstate', ()=> {
    expect( counter(undefined, {type: 'DECREMENT'}) ).toBe(-1)
 })

 test('test unknow', ()=> {
    expect( counter(undefined, {type: 'UNKNOWN'}) ).toBe(0)
 })