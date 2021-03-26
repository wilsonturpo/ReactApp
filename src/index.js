import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {

  const course = 'Desarrollo de Aplicaciones Avanzadas'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content parte={part1} numEjercicios={exercises1} />
      <Content parte={part2} numEjercicios={exercises2} />
      <Content parte={part3} numEjercicios={exercises3} />

      <Total total={exercises1 + exercises2 + exercises3} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))