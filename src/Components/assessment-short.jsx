import React from 'react'
import style from '../../styles/assessment-short'
import { ButtonStates } from '../Domain/button-states'

export default class AssessmentShort extends React.Component {
  render() {
    const assessment = this.props.assessment.map(group => (<div className={ButtonStates[group.score]}>{group.shortLabel}</div>))
    return (<div className='assessment-short'>{assessment}</div>)
  }
}