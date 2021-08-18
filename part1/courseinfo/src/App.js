import React from 'react'

const Header = (props) => {
  console.log('Header component console test:')
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log('Content component console test:')
  console.log(props)
  return (
    <div>
      <h2>Content of course:</h2>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  console.log('Part component console test:')
  console.log(props)
  return (
    <div>
      <p>{props.part} with {props.exercises} exercises.</p>
    </div>
  )
}

const Total = (props) => {
  console.log('Total component console test:')
  var total = props.parts[0].exercises + props.parts[1].exercises +
    props.parts[2].exercises

  return (
    <div>
      <h3>Total number of exercises in course: {total}</h3>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
