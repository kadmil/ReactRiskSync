import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import * as reducers from './reducers'
import { diffSync, syncReducerWrapper, stateSyncMiddleware } from '../Sync'

const regularReducer = combineReducers({...reducers, diffSync})
const reducer = syncReducerWrapper(regularReducer)
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  stateSyncMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
