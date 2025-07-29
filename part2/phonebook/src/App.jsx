import { useState, useEffect } from 'react'
import "./index.css"
import personService from "./services/notes"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import NotificationBanner  from './components/Notification'

const App = () => {

const [persons, setPersons] = useState([])
const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [searchValue, setSearchValue] = useState('')
const [message, setMessage] = useState('')
const [messageType, setMessageType] = useState("success")

useEffect(()=>{
  personService
    .getAll()
    .then(initialPersons =>{
      setPersons(initialPersons)
    })
  }, [])

const handleNameChange = (e)=> setNewName(e.target.value)
const handleNumberChange = (e) => setNewNumber(e.target.value)
const handleSearchValue = (e) => setSearchValue(e.target.value)

const personToShow = searchValue?
  persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  :persons


const addName = (e)=>{
  e.preventDefault()
  let index = persons.length - 1

  const personObject = {
    name : newName,
    number : newNumber,
    id : String(Number(persons[index].id) + 1)
  }

  const filtered = persons.find(person => person.name === newName)

  if(filtered){
    if(personObject.number === filtered.number){
      alert(`${personObject.name} already exists`)
      setNewName('')
      setNewNumber('')
    }else{
      if(window.confirm(`${personObject.name} is already added to phonebook, replace the old number with new one?`)){
        const newPersonObject = {...filtered, number : newNumber}
        personService
          .update(filtered.id, newPersonObject)
          .then(() =>{
            const updatedPersons = persons.map(person => 
              filtered.id === person.id 
              ? newPersonObject 
              : person
            )
            setPersons(updatedPersons)
            setMessage("success")
            setMessage(`Number of ${newPersonObject.name} has been updated.`)
            setTimeout(() => {
              setMessage("")
            }, 2000);
            setNewName("")
            setNewNumber("")
          })
          .catch(error =>{
            setMessageType('error')
            setMessage(`Information of ${personObject.name} has already been removed.`)
            setTimeout(() => {
              setMessage("")
            }, 5000);
            setNewName("")
            setNewNumber("")
            const updatedPersons = persons.filter(person => personObject.name !== person.name)
            setPersons(updatedPersons)
          })
      } else{
        console.log("not succeeded")
      }
    }
  } else{
    personService
      .create(personObject)
      .then(returnedNote =>{
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage("")
        }, 5000);
        
      })
  }
}

const handleDelete = (id)=>{
  const deletePerson = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${deletePerson.name}?`)) {
      console.log(`delete ${id}`)
      console.log(persons)
      personService
        .remove(id)
        .then(()=> setPersons(persons.filter(person => person.id !== id)))
    } else {
      console.log("User canceled")
    }
  }

return (
  <div>
    <h2>Phonebook</h2>
    <NotificationBanner message={message} type = {messageType}/>
    <Filter value={searchValue} onChange={handleSearchValue}/>
    <h2>Add a new</h2>
    <PersonForm onSubmit={addName}
                valueName={newName} 
                onChangeName={handleNameChange}
                valueNumber={newNumber} 
                onChangeNumber={handleNumberChange}
    />
    <h2>Numbers</h2>
    <Persons personToShow = {personToShow} handleDelete={handleDelete}/>
  </div>
)
}

export default App

