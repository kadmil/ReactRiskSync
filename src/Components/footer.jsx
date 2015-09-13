import React from 'react'
import style from '../../styles/footer'
import { StateSeverity } from '../Domain/state-severity'
import { GetAssessmentScore } from '../Utils'

export default function Footer (props) {
  const stateName = StateSeverity[GetAssessmentScore(props.assessment)].className
  return (<footer className={`footer ${stateName}`}>Методика - ©В.А. Буштырев</footer>)
}
