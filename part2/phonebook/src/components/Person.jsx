const Person = ({name,number,id,handleDelete})=>{
  return <p>{name} {number} <button onClick={()=> handleDelete(id)}>delete {id}</button></p>
}

export default Person
