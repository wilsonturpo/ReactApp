import React from 'react'
import ReactDOM from 'react-dom'
import Part from './Part'

const part1 = 'Fundamentals of React'
const exercises1 = 10

const part2 = 'Using props to pass data'
const exercises2 = 7

const part3 = 'State of a component'
const exercises3 = 14

const Content = () => {
  return (
    <div>
      <Part  parte={part1} numEjercicios={exercises1} />
      <Part  parte={part2} numEjercicios={exercises2} />
      <Part  parte={part3} numEjercicios={exercises3} />
    </div>
  )
}

export default Content

