import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import {store} from './store'

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// const render = () => document.body.innerText = store.getState()

//dump componnet, displays store, callbacks passed as props are bound to eventhandlers
const Counter = ({value,onIncrement,onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
    
)

//render fucntion, called from subscribe,renders store in Counter, pass on props as callbacks that calls the actions
const render = () => {
    ReactDOM.render(
       <Counter value={store.getState()}
       onIncrement={()=> store.dispatch({type : 'INCREMENT'})}
       onDecrement={()=> store.dispatch({type : 'DECREMENT'})} 
       />
        ,document.getElementById('root'))
}

render()

store.subscribe(render)

// document.addEventListener('click', () => {
//     store.dispatch({type : 'INCREMENT'})
// })