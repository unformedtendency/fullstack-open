const Part = ({part})=> <p>{part.name} {part.exercises}</p>

const Total = ({total}) => <strong><p>Total of {total} exercises</p></strong>

const Content = ({content})=>{
  let total = content.reduce((acc, cur)=> acc + cur.exercises, 0)
  return (
  <>
    {content.map(item => (
      <Part key = {item.id} part = {item}/>
    ))}
    <Total total = {total}/>
  </>
  )
}

const Header = ({title})=> <h1>{title}</h1>

const Course = ({course})=>{
  return (
    <>
      <Header title = {course.name}/>
      <Content content = {course.parts}/>
    </>
  )
}

export default Course