import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
  return (
    <div>
      <p>{props.parte} - {props.numEjercicios}</p>
    </div>
  )
}

export default Content

