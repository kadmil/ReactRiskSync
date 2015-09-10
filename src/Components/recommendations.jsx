import React from 'react'

import style from'../../styles/recommendations'

import { ButtonStates } from '../Domain/button-states'

export default class Recommendations extends React.Component {
  render() {
    const recommendations = this.props.assessment.filter(rec => rec.score > 0).sort((a, b) => -(a.score - b.score)).map( rec => (<div className={`recommendation ${ButtonStates[rec.score]}`}><div>{rec.groupName}</div><div>{rec.hint}</div></div>) )
    const caption = recommendations.length ? (<div>Подготовка к транспортировке</div>) : false
    return (<div className='recommendations'>{caption}<div>{recommendations}</div></div>)
  }
}