export const NEW_EVENT = 'NEW_EVENT'

export function newEvent(eventData){
  return {
    type: NEW_EVENT,
    eventData
  }
}

export const SELECT_OPTION = 'SELECT_OPTION'

export function selectOption(groupId, optionGroupId, optionId){
  return {
    type: SELECT_OPTION,
    groupId,
    optionGroupId,
    optionId,
  }
}