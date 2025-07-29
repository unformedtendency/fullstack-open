import axios from 'axios' 
import { useState, useEffect } from 'react'
import Countries from './components/Countries'

function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  useEffect(()=>{
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(res =>{
        setAllCountries(res.data)
      })
  },[])

  const handleChange = (e)=>{
    let search = e.target.value
    setValue(search)
    if(search === ""){
      setCountries([])
      return
    }else{
      let result = allCountries
                          .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
      // console.log(`result is ${result}`)
      setCountries(result)
    }
  }

   const handleShow = (country)=>{
        setCountries([country])
  }


  return(
    <>
      <div>Find Countries <input type="text" value={value} onChange={handleChange}/></div>
      <Countries countries = {countries} handleShow = {handleShow}/>
    </>
  )  
}

export default App
