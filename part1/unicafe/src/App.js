import React, {useState} from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (

    <div>
      <style>{`
        table, td{
          table-layout:fixed;
          width:20%;
          border:1px solid black;
          text-align:center;
        }
      `}</style>
      <table>
        <tbody>
        <tr>
          <td>{props.text} Ratings:</td>
          <td>{props.value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  // To display if no input has been collected yet
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback collected yet</div>
    )
  }

  // Just some dirty math stuff
  let total = good + neutral + bad
  let average = Math.round(((good - bad) / 3 ) * 100 + Number.EPSILON) / 100
  const percent = (a, b=0) => {
    return (
      Math.round((good / (neutral + bad + good) * 100))) + "%"
    }

    return (
      <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={percent()} />
      </div>
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
      <Button handleClick={() => setToNeutral(neutral+1)} text='neutral' />
      <Button handleClick={() => setToBad(bad+1)} text='bad' />
      <h1>Feedback Statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App
