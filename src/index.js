import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
import {createStore} from 'redux'
import {todoAppReducer} from './reducer/index'
import StoreContext from './StoreContext'



const render = () => {


  ReactDOM.render(
    //makinf store completely injectable as a prop rtaher than a top level variable
      <StoreContext.Provider value={createStore(todoAppReducer)}>
      <TodoApp />
      </StoreContext.Provider>,
      document.getElementById('root')
  )
}

render()

