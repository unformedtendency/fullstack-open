const api_key = import.meta.env.VITE_SOME_KEY
import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({country})=>{
    const [weather, setWeather] = useState(null)

    const lat = country.latlng[0]
    const lon = country.latlng[1]
    useEffect(()=>{
        console.log(`country is ${country}`)
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
            .then(res =>{
                setWeather(res.data) 
            })
    },[country])

    return(
        <>
            <h1>Weather in {country.name.common}</h1>
            {!weather? "Loading..."
              :<>
                <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p>Wind {weather.wind.speed} m/s</p>
              </>
            }     
        </>
    )
}

export default Weather
