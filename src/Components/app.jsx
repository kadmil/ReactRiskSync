import React from 'react'

import { connect, Provider } from 'react-redux';

import configureStore from '../Redux/configure-store'

import style from '../../styles/app.css'

import index from '../../index.html'

import Header from './header'
import Assessment from './assessment'
import Recommendations from './recommendations'
import Footer from './footer'

import { selectOption } from '../Redux/action-creators'


class DumbApp extends React.Component {
  render() {
    return (<div className='app'><Header assessment = {this.props.assessment}/><Assessment {...this.props}/><Recommendations assessment = {this.props.assessment}/><Footer assessment = {this.props.assessment}/></div>)
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectOption: (...data)=>dispatch(selectOption(...data))
  }
}

const store = configureStore()

const App = connect(mapStateToProps, mapDispatchToProps)(DumbApp)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() =>
          <App></App>
        }
      </Provider>
    )
  }
}

const appElement = document.getElementById('app')

React.render(<Root/>, appElement)

export default App