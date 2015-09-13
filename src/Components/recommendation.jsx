import React from 'react'
import style from'../../styles/recommendation'

import { ButtonStates } from '../Domain/button-states'

export default function Recommendation (props) {
  return (<div  className={`recommendation ${ButtonStates[props.score]}`}>
      <div>{props.groupName}</div>
      <div>{props.hint}</div>
    </div>)
}