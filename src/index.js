import React from 'react';
import ReactDOM from 'react-dom';

import {store} from './store.js'
import TodoApp from './TodoApp'


const render = () => {


  ReactDOM.render(
    //https://zhenyong.github.io/react/docs/jsx-spread.html
    //JSX Spread Attribute
      <TodoApp {...store.getState()} />,
      document.getElementById('root')
  )
}

render()

store.subscribe(render)
