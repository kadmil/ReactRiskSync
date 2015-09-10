import React from 'react'

import style from'../../styles/assessment'

import AssessmentGroup from './assessment-group'

export default class Assessment extends React.Component {
  render() {
    const groups = this.props.assessmentPattern.map((group, index) => (<AssessmentGroup {...group} selectOption={this.props.selectOption} groupId={index} groupAssessment={this.props.assessment[index]}></AssessmentGroup>))
    return (<div className='assessment'>{groups}</div>)
  }
}