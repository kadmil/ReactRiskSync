import React from 'react'
import OptionGroup from './option-group'
import style from '../../styles/assessment-group'


export default class AssessmentGroup extends React.Component {
  render(){
    const optionGroups = this.props.optionGroups.map((group, index) => <OptionGroup options={group} groupId={this.props.groupId} index={index} activeGroupOptionIndex={this.props.groupAssessment.score === index ? this.props.groupAssessment.optionId : -1} selectOption={this.props.selectOption}></OptionGroup>)
    return (<div className='assessment-group'><div className='assessment-group-label'>{this.props.label}</div>{optionGroups}</div>)
  }
}
