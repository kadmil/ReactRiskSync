import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
