import React from 'react'
import style from '../../styles/option-group'
import colorStyle from '../../styles/colored-styles'
import { ButtonStates } from '../Domain/button-states'

export default function OptionGroup (props) {
  const stateClass = ButtonStates[props.index]
  const activeIndex = props.activeGroupOptionIndex
  const options = props.options.map((option, index) => (<div className={`button ${stateClass} ${activeIndex === index ? 'active' : ''}`} key={index} onClick={()=>props.selectOption(props.groupId, props.index, index)}>{option.text}</div>))
  return (<div className='option-group'>{options}</div>)
}
