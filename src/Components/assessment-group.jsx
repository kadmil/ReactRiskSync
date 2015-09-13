import React from 'react'
import OptionGroup from './option-group'
import style from '../../styles/assessment-group'


export default function AssessmentGroup (props) {
  const optionGroups = props.optionGroups.map((group, index) => <OptionGroup key={index} options={group} groupId={props.groupId} index={index} activeGroupOptionIndex={props.groupAssessment.score === index ? props.groupAssessment.optionId : -1} selectOption={props.selectOption}></OptionGroup>)
  return (<div className='assessment-group'>
            <div className='assessment-group-label'>{props.label}</div>
            {optionGroups}
          </div>)
}
