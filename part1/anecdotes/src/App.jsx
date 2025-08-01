import { useState } from 'react'

const MostVotes = ({votes,anecdotes})=>{
  let max = Math.max(...votes)
  let index = votes.indexOf(max)
  if (max != 0){
    return(
    <div>
      <h1>Anecdotes with most votes</h1>
      {anecdotes[index]} 
      <br/>
      has {max} votes.
    </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const changeAnecdotes = ()=>{
    let num = Math.floor(Math.random() * 8)
    setSelected(num)
  }

  const vote = ()=>{
    let newArr = [...votes]
    newArr[selected] += 1
    setVotes(newArr)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <button onClick = {vote}>Vote</button>
      <button onClick={changeAnecdotes}>Next Anecdote</button>
      <MostVotes votes = {votes} anecdotes = {anecdotes}/>
    </div>
  )
}

export default App