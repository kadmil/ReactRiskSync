import React from 'react'
import style from '../../styles/on-air'

export default function OnAir (props) {
  return (<div className='on-air'>{props.onAir ? '' : 'Нет связи с сервером'}</div>)
}
