import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  const [weather, setWeather] = useState([])
  const APIKEY = 'daaf5734762b2d919790979e7f09aba1'

  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error:""
      }
      )} else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please Type A City And Country"
      }
      )}
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>

      <Form getWeather={fetchData}/>

      {console.log(weather.data)}

      <Weather
        city={weather.city}
        country={weather.country}
        description={weather.description}
        temperature={weather.temperature}
        error={weather.error}
      />
    </div>
  )
}

export default App
