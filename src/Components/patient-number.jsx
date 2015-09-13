import React from 'react'
import style from'../../styles/patient-number'

export default function PatientNumber (props) {
  const handleChange = (event) => props.changePatientNumber(event.target.value)
  return (<div className='patient-number'><span>№</span><input value={props.patientNumber} onChange={handleChange}/></div>)
}
