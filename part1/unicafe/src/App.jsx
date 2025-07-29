import { useState } from 'react'

const StatisticLine = ({value, text})=>{
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = ()=> {
  setGood(good + 1)
  }

  const handleNeutralClick = ()=> {
  setNeutral(neutral + 1)
  }

  const handleBadClick = ()=> {
  setBad(bad + 1)
  }

  return (
    <div>
      <Heading text = "Give Feedback"/>
      <Button onClick = {handleGoodClick} text = "Good"/>
      <Button onClick = {handleNeutralClick} text = "Neutral"/>
      <Button onClick = {handleBadClick} text = "Bad"/>
      <Statistics heading = "Statistics" good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}



const Heading = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

const Statistics = ({heading, good, neutral, bad}) => {
  let total = good + neutral + bad

  if (total === 0) {
    return (
      <>
        <h1>{heading}</h1>
        <p>No feedback given</p>
      </>
    )
  }

  let average = (good - bad)/total
  let positive = (good * 100) / total
  return (
    <>
      <h1>{heading}</h1>
      <table>
        <tbody>
          <StatisticLine value = {good} text = "Good"/>
          <StatisticLine value = {neutral} text = "Neutral"/>
          <StatisticLine value = {bad} text = "Bad"/>
          <StatisticLine value = {total} text = "Total"/>
          <StatisticLine value = {average.toFixed(2)} text = "Average"/>
          <StatisticLine value = {positive.toFixed(2)} text = "Positive Feedback"/>
        </tbody>
      </table>
    </>
  )
}
export default App