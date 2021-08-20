import React, {useState} from 'react'

// Event Handler for Button
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// Event Handler for Popular
const Popular = ({anecdotes, arr}) => {

  // crude search algo
  const findMax = () => {
    let max = arr[0]
    let maxIndex = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i
        max = arr[i]
      }
    }
    return maxIndex
  }

  return (
    <div>
      {anecdotes[findMax()]}
    </div>
  )
}

// Event Handler for Display
const Display = ({points}) => {
  return (
    <div>
      This anecdote has {points} votes.
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState([0, 0, 0, 0, 0, 0, 0])

  // Copy of useState array for mutation
  const copyOfScore = [...score]

  // Mutator functions for useState
  const setToScore = (copyOfScore) => {
    copyOfScore[selected] += 1
    setScore(copyOfScore)
  }
  const setToSelected = (selected) => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <h1>Can I offer you an anecdote in these trying times?</h1>
      <h3>{anecdotes[selected]}</h3>
      <Display points={copyOfScore[selected]} />
      <div>
        <Button handleClick={() => setToScore(copyOfScore)} text='Vote' />
        <Button handleClick={() => setToSelected(selected)} text='Get Another Anecdote' />
      </div>
      <div>
        <h2>Most Popular Anecdote</h2>
        <Popular anecdotes={anecdotes} arr={copyOfScore} />
      </div>
    </div>
  )
}


export default App
