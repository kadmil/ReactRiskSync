export function GetAssessmentScore(assessment){
  return assessment.reduce((res, groupData) => res + groupData.score, 0)
}