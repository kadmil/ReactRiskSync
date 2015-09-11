import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import * as reducers from './reducers'
import { stateSyncMiddleware } from '../Sync'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  stateSyncMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
