import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return (
    <div>
      <p>{props.parte} - {props.numEjercicios}</p>
    </div>
  )
}

export default Part

