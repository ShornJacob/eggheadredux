import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
import {createStore} from 'redux'
import {todoAppReducer} from './reducer/index'


const render = () => {


  ReactDOM.render(
    //makinf store completely injectable as a prop rtaher than a top level variable
      <TodoApp store={createStore(todoAppReducer)} />,
      document.getElementById('root')
  )
}

render()

