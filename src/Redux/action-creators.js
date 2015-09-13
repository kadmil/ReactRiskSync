export const SELECT_OPTION = 'SELECT_OPTION'

export function selectOption(groupId, optionGroupId, optionId) {
  return {
    type: SELECT_OPTION,
    groupId,
    optionGroupId,
    optionId,
  }
}
