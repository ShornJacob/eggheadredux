import React from 'react';
import ReactDOM from 'react-dom';

import {store} from './store.js'
import {TodoApp} from './TodoApp'


const render = () => {
  ReactDOM.render(
    //spread of state field, every state field is passed as a prop
      <TodoApp {...store.getState()} />,
      document.getElementById('root')
  )
}

render()

store.subscribe(render)
