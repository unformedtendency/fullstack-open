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
    <>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total total = {course.parts}/>
    </>
  )
}

function Header(props){
  return <h1>{props.course}</h1>
}

function Part(props){
  return <p> {props.part} {props.exercise}</p>
}

function Content(props){
  // console.log(props.parts[0])
  return(
    <>
      <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
    </>
  )
}

function Total(props){
  console.log(props)
  return <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
}

export default App