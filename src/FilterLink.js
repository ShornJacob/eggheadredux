import React, {Component} from 'react'
import Link from './Link'
import { ReactReduxContext } from 'react-redux'


export default class FilterLink extends Component {



      static contextType =  ReactReduxContext;

      componentDidMount() {

        const store = this.context.store
        this.unsubscribe = store.subscribe( ()=> this.forceUpdate()  )
      }
      
      componentWillUnmount() {
        this.unsubscribe()
      }

      
      render() {

        const props = this.props
        const store = this.context.store
        const state = store.getState()

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

