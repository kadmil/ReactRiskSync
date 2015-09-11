import React from 'react'

import style from'../../styles/assessment'
import { AssessmentPattern } from '../Domain/assessment-pattern'
import AssessmentGroup from './assessment-group'

export default class Assessment extends React.Component {
  render() {
    const groups = AssessmentPattern.map((group, index) => (<AssessmentGroup {...group} selectOption={this.props.selectOption} groupId={index} groupAssessment={this.props.assessment[index]}></AssessmentGroup>))
    return (<div className='assessment'>{groups}</div>)
  }
}