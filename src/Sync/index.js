import { Client } from 'diffsync'
import socket from 'socket.io-client'
import cloneDeep from 'lodash.clonedeep'
import debounce from 'lodash.debounce'

export const DATA_SYNCED = 'DATA_SYNCED'

export function dataSynced(data){
  return {
    type: DATA_SYNCED,
    isSyncAction: true,
    data
  }
}

export const CHANGE_SYNC_ID = 'CHANGE_SYNC_ID'

export function changeSyncId(newSyncId){
  return {
    type: CHANGE_SYNC_ID,
    isSyncAction: true,
    shouldChangeSyncClient: true,
    newSyncId
  }
}

export const CHANGE_SYNC_CLIENT = 'CHANGE_SYNC_CLIENT'

export function changeSyncClient(client) {
  return {
    type: CHANGE_SYNC_CLIENT,
    isSyncAction: true,
    client: client
  }
}

//diffsync data reducer
export function diffSync(state = {syncId: 0, clientReady: false}, action) {
  switch(action.type) {
    case CHANGE_SYNC_ID: {
      return { ...state, syncId: action.newSyncId, clientReady: false }
    }
    case CHANGE_SYNC_CLIENT: {
      return { ...state, client: action.client, clientReady: true }
    }
  }
  return state
}

export function syncReducerWrapper(reducer) {
  return (state, action) => {
    if (action.type === DATA_SYNCED) {
      //there's a bug with immutability — need a deep clone of action.data
      return {...cloneDeep(action.data), diffSync: state.diffSync}
    }
    return reducer(state, action)
  }
}

const shouldSyncData = (action, state) => !action.isSyncAction && state.diffSync.clientReady
const syncData = (state) => state.diffSync.client.sync({...state, diffSync: undefined})

const shouldChangeClient = (action) => action.shouldChangeSyncClient
const createClient = (id, store) => {
  const client = new Client(socket(''), id)
  client.on('connected', () => {
    //init diffsync with initial state of our app
    if (!Object.getOwnPropertyNames(client.getData()).length) {
      client.sync({...store.getState(), diffSync: undefined})
    }
    store.dispatch(dataSynced(client.getData()))
    store.dispatch(changeSyncClient(client))
  })
  // an update from the server has been applied
  // you can perform the updates in your application now
  client.on('synced', ()=> store.dispatch(dataSynced(client.getData())))

  client.initialize()
  return client
}

const debouncedCreateClient = debounce(createClient, 500)

//middleware for synching
export const stateSyncMiddleware = store => next => action => {
  const result = next(action)
  //sync part
  if (shouldSyncData(action, store.getState())){
    syncData(store.getState())
  }
  //sync client change part
  if (shouldChangeClient(action)) {
    debouncedCreateClient(action.newSyncId, store)
  }

  return result
}
