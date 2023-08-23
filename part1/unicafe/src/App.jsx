import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const Counter = ({text, value}) => (
    <p>{text} {value}</p>
  )

  const addGood = () => (
    setGood(good + 1)
  )
  
  const addNeutral = () => (
    setNeutral(neutral + 1)
  )

  const addBad = () => (
    setBad(bad + 1)
  )

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text={"good"}/>
      <Button handleClick={addNeutral} text={"neutral"}/>
      <Button handleClick={addBad} text={"bad"}/>
      <h1>statistics</h1>
      <Counter text={"good"} value={good}/>
      <Counter text={"neutral"} value={neutral}/>
      <Counter text={"bad"} value={bad}/>
    </div>
  )
}

export default App