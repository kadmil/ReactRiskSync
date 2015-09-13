import React from 'react'
import style from'../../styles/assessment'
import { AssessmentPattern } from '../Domain/assessment-pattern'
import AssessmentGroup from './assessment-group'

export default function Assessment (props) {
  const groups = AssessmentPattern.map((group, index) => (<AssessmentGroup key={index} {...group} selectOption={props.selectOption} groupId={index} groupAssessment={props.assessment[index]}></AssessmentGroup>))
  return (<div className='assessment'>{groups}</div>)
}
