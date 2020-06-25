import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Weather from './components/Weather'

function App() {
  const [weather, setWeather] = useState([])
  const APIKEY = '24ffdfdd664d7e8bbc57efbbac334b74'

  async function fetchData(e) {
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      setWeather({
        data: apiData
      })
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData}/>
      {console.log(weather.data)}
      <Weather/>
    </div>
  )
}

export default App
