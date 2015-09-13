import React from 'react'
import style from'../../styles/recommendations'
import Recommendation from './recommendation'

export default function Recommendations (props) {
  const recommendations = props.assessment
  .filter(rec => rec.score > 0)
  .sort((a, b) => -(a.score - b.score))
  .map( (rec, index) => (<Recommendation key={index} {...rec}/>) )

  const caption = recommendations.length ? (<div>Подготовка к транспортировке</div>) : false
  return (<div className='recommendations'>{caption}<div>{recommendations}</div></div>)
}