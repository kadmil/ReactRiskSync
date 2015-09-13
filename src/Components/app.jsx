import ReactDOM from 'react-dom'
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
import { changeSyncId } from '../Sync'


const DumbApp = (props) => (
  <div className='app'>
    <Header assessment = {props.assessment}/>
    <Assessment {...props}/>
    <Recommendations assessment = {props.assessment}/>
    <Footer assessment = {props.assessment}/>
  </div>)

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectOption: (...data) => dispatch(selectOption(...data))
  }
}

const store = configureStore()

store.dispatch(changeSyncId(1))

const App = connect(mapStateToProps, mapDispatchToProps)(DumbApp)

const Root = _ => (
  <Provider store={store}>
    <App/>
  </Provider>
)

const appElement = document.getElementById('app')

ReactDOM.render(<Root/>, appElement)

export default App