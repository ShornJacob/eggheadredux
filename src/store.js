import {createStore} from 'redux'
import {todoAppReducer} from './reducer/index'

const store = createStore(todoAppReducer)

export {store}