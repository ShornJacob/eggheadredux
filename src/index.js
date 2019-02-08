import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
import {createStore} from 'redux'
import {todoAppReducer} from './reducer/index'
import { Provider } from 'react-redux'



const render = () => {


  ReactDOM.render(
    //making store completely injectable as a prop rtaher than a top level variable
      <Provider store={createStore(todoAppReducer)}>
      <TodoApp />
      </Provider>,
      document.getElementById('root')
  )
}

render()

