import { Client } from 'diffsync'
import socket from 'socket.io-client'

import { syncData } from '../Redux/action-creators'

// pass the connection and the id of the data you want to synchronize
const id = 1
let data
let client

export function syncStore(id, store){
  client = new Client(socket('http://localhost:4000'), id)

  const dispatch = () => store.dispatch(syncData(data))

  client.on('connected', () => {
    // the initial data has been loaded,
    // you can initialize your application
    data = client.getData()
    if (!data.assessment) {
      Object.assign(data, store.getState())
      client.sync()
    }
    dispatch()
  })

  // an update from the server has been applied
  // you can perform the updates in your application now
  client.on('synced', () => dispatch())

  client.initialize()
}

//middleware for synching
export const stateSyncMiddleware = store => next => action => {
  const result = next(action)
  if (data && !action.isSyncAction){
    Object.assign(data, store.getState())
    client.sync()
  }
  return result
}
