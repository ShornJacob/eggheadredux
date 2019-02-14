import Link from './Link'
import { connect } from 'react-redux'

//FilterLink is a container component that provides props and state to Link

const mapStatetoProps = (state, props) => ({ 
  active: props.filter === state.visibilityFilter 
})


const mapDispatchtoProps = (dispatch, props) => ({
  onClick: () => dispatch({type: 'SET_VISIBILITY_FILTER', payload: {  filter: props.filter  } })
})

//Link will recieve active and onlick values
export default connect(mapStatetoProps, mapDispatchtoProps)(Link)
