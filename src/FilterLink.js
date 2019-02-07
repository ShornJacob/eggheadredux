import React, {Component} from 'react'
import Link from './Link'


//A container component. A componnet that calls store
//The container componnet returns a presenational component Link
//This compares a passed prop to state and sends another prop down to child
//shuld also pass down dispatch to children, data and behavour

export default class FilterLink extends Component {

  
  // console.log(children)
  //console.log(onClick)
      //return something else if a condition is matched

      componentDidMount() {
        //https://reactjs.org/docs/react-component.html#forceupdate 
        //If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUPdate
        //subscribes returns handle to unsubsribe
        const {store } = this.props
        this.unsubscribe = store.subscribe( ()=> this.forceUpdate()  )
      }
      
      componentWillUnmount() {
        this.unsubscribe()
      }

      
      render() {

        const props = this.props
        const {store } = this.props
        const state = store.getState()

        //console.log(props.filter)

        //delegates rendering to the Link Presenttaional Component

        return (
          <Link active={props.filter === state.visibilityFilter}
                 onClick={ ()=> store.dispatch ({
                   type : 'SET_VISIBILITY_FILTER',
                   payload : {
                     filter: props.filter
                   }
                   })} >
                         {props.children}
          </Link>
        )
      }
    }

