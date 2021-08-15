import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <h2>Content of course:</h2>
        <p>{props.part1} with {props.exercises1} exercises,</p>
        <p>{props.part2} with {props.exercises2} exercises, and</p>
        <p>{props.part3} with {props.exercises3} exercises.</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <h3>Total number of exercises in course: {props.exercises}</h3>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3 ={part3}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App