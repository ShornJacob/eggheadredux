import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp'
import {createStore} from 'redux'
import {todoAppReducer} from './reducer/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'



const render = () => {


  ReactDOM.render(
    //making store completely injectable as a prop rtaher than a top level variable
    //Providerpasses th store down via context
      <Provider store={createStore(todoAppReducer)}>
        <Router>
           {/* add the optional :filter? */}
            <Route path="/:filter?" component={TodoApp}/>
        </Router>
  
      </Provider>,
      document.getElementById('root')
  )
}

render()

