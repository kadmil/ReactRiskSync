import React from 'react'
import style from '../../styles/header'
import AssessmentShort from './assessment-short'
import PatientNumber from './patient-number'
import { StateSeverity } from '../Domain/state-severity'
import { GetAssessmentScore, Pluralize } from '../Utils'

export default class Header extends React.Component {

  handleScroll = () => {
    this.setState({ scrolledClass : document.body.scrollTop > 50 ? 'short' : ''})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const assessmentScore = GetAssessmentScore(this.props.assessment)
    const stateName = StateSeverity[assessmentScore].state
    const transportablity = StateSeverity[assessmentScore].transportState
    const stateClassName = StateSeverity[assessmentScore].className
    return (<header className={`header ${stateClassName} ${this.state ? this.state.scrolledClass : ''}`}>
        <div className='title'><div className='wide'>Клиническая Шкала Оценки Недоношенных Новорожденных</div><div className='narrow'>КШОНН</div></div>
        <div>
          <div>
            <div>{`${assessmentScore} ${Pluralize('балл', 'балла', 'баллов', assessmentScore)}`}</div>
            { assessmentScore ? <AssessmentShort assessment = {this.props.assessment}/> : false }
          </div>
          <div>{`${stateName} состояние`}</div>
          <div>
            <PatientNumber patientNumber={this.props.patientNumber} changePatientNumber={this.props.changePatientNumber}/>
            <div>{assessmentScore ? transportablity : false}</div>
          </div>
        </div>
      </header>)
  }
}
