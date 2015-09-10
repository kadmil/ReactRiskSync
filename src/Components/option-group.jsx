import React from 'react'
import style from '../../styles/option-group'
import colorStyle from '../../styles/colored-styles'
import { ButtonStates } from '../Domain/button-states'

export default class OptionGroup extends React.Component {
  render(){
    const stateClass = ButtonStates[this.props.index]
    const activeIndex = this.props.activeGroupOptionIndex
    const options = this.props.options.map((option, index) => (<div className={`button ${stateClass} ${activeIndex === index ? 'active' : ''}`} key={index} onClick={()=>this.props.selectOption(this.props.groupId, this.props.index, index)}>{option.text}</div>))
    return (<div className='option-group'>{options}</div>)
  }
}
