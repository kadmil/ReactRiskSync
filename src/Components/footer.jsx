import React from 'react'
import moment from 'moment'
import style from '../../styles/footer'
import { StateSeverity } from '../Domain/state-severity'
import { GetAssessmentScore } from '../Utils'

export default function Footer (props) {
  const stateName = StateSeverity[GetAssessmentScore(props.assessment)].className
  const updatedText = props.updated ? `Обновлено ${moment(props.updated).format('HH:mm')}` : ''
  const signalText = props.onAir ? '' : 'Нет связи с сервером'
  const signalClass = props.onAir ? '' : 'no-signal'
  return (<footer className={`footer ${stateName} ${signalClass}`}>
    <div>{updatedText}</div>
    <div>Методика - ©В.А. Буштырев</div>
    <div>{signalText}</div>
    </footer>)
}
