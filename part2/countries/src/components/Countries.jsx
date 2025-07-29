import Country from "./Country"
import ShowCountry from "./ShowCountry.jsx"

const Countries = ({countries, handleShow})=>{
    
    if(countries.length === 1){
        return(
            <Country country = {countries[0]}/>
        )
    }
    if(countries.length > 10){
        return <p>Too many countries</p>
    }
    if(countries.length <= 10 && countries.length > 1){
        return countries.map((country, index) => <ShowCountry 
                                                    key={country.name.common} 
                                                    country = {country} 
                                                    handleShow = {handleShow}/>)
    }
}

export default Countries