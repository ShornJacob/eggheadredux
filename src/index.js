import React from 'react';
import ReactDOM from 'react-dom';

import {store} from './store.js'
import {TodoApp} from './TodoApp'


const render = () => {
  ReactDOM.render(
      <TodoApp todos={store.getState().todosReducer} />,
      document.getElementById('root')
  )
}

render()

store.subscribe(render)
