import React from 'react'
import style from '../../styles/assessment-short'
import { ButtonStates } from '../Domain/button-states'

export default function AssessmentShort (props) {
  const assessment = props.assessment.map((group, index) => (<div key={index} className={ButtonStates[group.score]}>{group.shortLabel}</div>))
  return (<div className='assessment-short'>{assessment}</div>)
}
