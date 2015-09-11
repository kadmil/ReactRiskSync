export const SELECT_OPTION = 'SELECT_OPTION'

export function selectOption(groupId, optionGroupId, optionId){
  return {
    type: SELECT_OPTION,
    groupId,
    optionGroupId,
    optionId,
  }
}

export const SYNC_DATA = 'SYNC_DATA'

export function syncData(data){
  return {
    type: SYNC_DATA,
    isSyncAction: true,
    data
  }
}