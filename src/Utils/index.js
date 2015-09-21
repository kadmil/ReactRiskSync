export function GetAssessmentScore(assessment) {
  return assessment.reduce((res, groupData) => res + groupData.score, 0)
}

export function Pluralize(single, twoThreeFour, plural, number) {
  var decisionDigit = number % 10
  if (decisionDigit === 1) {
    return single
  }
  if (decisionDigit > 1 && decisionDigit <= 4) {
    return twoThreeFour
  }
  return plural
}