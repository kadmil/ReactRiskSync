import { SELECT_OPTION, SYNC_DATA } from './action-creators'
import { AssessmentPattern } from '../Domain/assessment-pattern'

const defaultAssessment = AssessmentPattern.map(group => ({score:0, optionId:0, groupName: group.label, shortLabel: group.shortLabel, hint: group.optionGroups[0][0].recommendation}))

export function assessment(state = defaultAssessment, action){
  switch(action.type){
    case SELECT_OPTION: {
      const group = AssessmentPattern[action.groupId]
      const newRecommendation = group.optionGroups[action.optionGroupId][action.optionId].recommendation
      const newAssessment = {score: action.optionGroupId, optionId: action.optionId, groupName: group.label, shortLabel: group.shortLabel, hint: newRecommendation}
      return [...state.slice(0, action.groupId), newAssessment, ...state.slice(action.groupId +1)]
    }
    case SYNC_DATA: {
      return action.data.assessment.slice()
    }
  }
  return state
}
