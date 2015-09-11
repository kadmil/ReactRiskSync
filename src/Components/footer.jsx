import React from 'react'
import style from '../../styles/footer'
import { StateSeverity } from '../Domain/state-severity'
import { GetAssessmentScore } from '../Utils'

export default class Footer extends React.Component {
  render() {
    const stateName = StateSeverity[GetAssessmentScore(this.props.assessment)].className
    return (<footer className={`footer ${stateName}`}>Методика - ©В.А. Буштырев</footer>)
  }
}