import React, {useState} from 'react'

const Display = (props) => {
  return (
    <div>
      <h3>Good Ratings: {props.good}</h3>
      <h3>Neutral Ratings: {props.neutral}</h3>
      <h3>Bad Ratings: {props.bad}</h3>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = () => {
  // save clicks of each button to its own useState
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = good => {
    setGood(good)
  }

  const setToNeutral = neutral => {
    setNeutral(neutral)
  }

  const setToBad = bad => {
    setBad(bad)
  }

  return (
    <div>
      <h1>User Feedback</h1>
      <Button handleClick={() => setToGood(good+1)} text='good' />
      <Button handleClick={() => setToNeutral(neutral+1)} text='neatral' />
      <Button handleClick={() => setToBad(bad+1)} text='bad' />
      <h1>Feedback Statistics</h1>
      <div>
        <Display good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
